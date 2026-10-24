import actionLists from "../data/motion-actions.json";

const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const unit = (v) => (v || "px").toLowerCase();
const easing = {
  linear: (t) => t,
  ease: (t) => t * t * (3 - 2 * t),
  inQuad: (t) => t * t,
  outQuad: (t) => t * (2 - t),
  inOutQuad: (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2),
  inCubic: (t) => t ** 3,
  outCubic: (t) => 1 - (1 - t) ** 3,
  inOutCubic: (t) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2),
  inQuart: (t) => t ** 4,
  outQuart: (t) => 1 - (1 - t) ** 4,
  inOutQuart: (t) => (t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2),
  inQuint: (t) => t ** 5,
  outQuint: (t) => 1 - (1 - t) ** 5,
  inOutQuint: (t) => (t < 0.5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2),
  inSine: (t) => 1 - Math.cos((t * Math.PI) / 2),
  outSine: (t) => Math.sin((t * Math.PI) / 2),
  inOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  inExpo: (t) => (t === 0 ? 0 : 2 ** (10 * t - 10)),
  outExpo: (t) => (t === 1 ? 1 : 1 - 2 ** (-10 * t)),
  outBack: (t) => 1 + 2.70158 * (t - 1) ** 3 + 1.70158 * (t - 1) ** 2,
};
function bezier([x1, y1, x2, y2]) {
  return (t) => {
    const b = (a, b, u) =>
      3 * (1 - u) ** 2 * u * a + 3 * (1 - u) * u * u * b + u ** 3;
    let lo = 0,
      hi = 1;
    for (let i = 0; i < 16; i++) {
      const m = (lo + hi) / 2;
      if (b(x1, x2, m) < t) lo = m;
      else hi = m;
    }
    return b(y1, y2, (lo + hi) / 2);
  };
}
const ease = (value) =>
  Array.isArray(value) ? bezier(value) : easing[value] || easing.linear;
const numeric = (v) => Number.parseFloat(v) || 0;
const channelKey = (type, key) => `${type}:${key}`;

/** Translate the reference interaction data into native DOM/React lifecycle animations.
 * No Webflow runtime, jQuery, remote code, or eval is used in the browser.
 */
export function attachMotion(root, pageId, config = { events: {} }) {
  const motion = { events: config.events, actionLists };
  let disposed = false,
    frame = 0;
  const cleanups = [],
    originalStyles = new Map(),
    states = new WeakMap(),
    tasks = new Set(),
    activeTasks = new Map(),
    runs = new Map(),
    continuous = [];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const breakpoint = () =>
    innerWidth >= 992
      ? "main"
      : innerWidth >= 768
        ? "medium"
        : innerWidth >= 480
          ? "small"
          : "tiny";
  const active = (e) =>
    !e.mediaQueries || e.mediaQueries.includes(breakpoint());
  const remember = (el) => {
    if (!originalStyles.has(el))
      originalStyles.set(el, el.getAttribute("style"));
  };
  const query = (scope, selector) => {
    try {
      return [...scope.querySelectorAll(selector)];
    } catch {
      return [];
    }
  };
  function targets(target = {}, trigger) {
    if (
      target.useEventTarget === true ||
      target.appliesTo === "TRIGGER_ELEMENT"
    )
      return trigger ? [trigger] : [];
    if (target.useEventTarget === "CHILDREN")
      return trigger ? query(trigger, target.selector) : [];
    if (target.useEventTarget === "IMMEDIATE_CHILDREN")
      return trigger
        ? [...trigger.children].filter((x) => x.matches(target.selector))
        : [];
    if (target.useEventTarget === "SIBLINGS")
      return trigger
        ? [...trigger.parentElement.children].filter(
            (x) => x !== trigger && x.matches(target.selector),
          )
        : [];
    if (target.useEventTarget === "PARENT") {
      const parent = trigger?.parentElement?.closest(target.selector);
      return parent ? [parent] : [];
    }
    if (target.appliesTo === "PAGE") return target.id === pageId ? [root] : [];
    if (target.id) {
      const parts = target.id.split("|");
      if (parts.length > 1 && parts[0] !== pageId) return [];
      return query(root, `[data-motion-id="${CSS.escape(parts.at(-1))}"]`);
    }
    if (target.selector) return query(root, target.selector);
    return [];
  }
  function state(el) {
    let s = states.get(el);
    if (s) return s;
    const computed = getComputedStyle(el);
    let matrix;
    try {
      matrix = new DOMMatrixReadOnly(
        computed.transform === "none" ? undefined : computed.transform,
      );
    } catch {
      matrix = new DOMMatrixReadOnly();
    }
    s = {
      move: {
        x: matrix.m41,
        y: matrix.m42,
        z: matrix.m43,
        xUnit: "px",
        yUnit: "px",
        zUnit: "px",
      },
      scale: {
        x: Math.hypot(matrix.m11, matrix.m12) || 1,
        y: Math.hypot(matrix.m21, matrix.m22) || 1,
        z: 1,
      },
      rotate: {
        x: 0,
        y: 0,
        z: (Math.atan2(matrix.m12, matrix.m11) * 180) / Math.PI,
        xUnit: "deg",
        yUnit: "deg",
        zUnit: "deg",
      },
    };
    states.set(el, s);
    return s;
  }
  const drawTransform = (el, s) => {
    el.style.transform = `translate3d(${s.move.x}${s.move.xUnit},${s.move.y}${s.move.yUnit},${s.move.z}${s.move.zUnit}) scale3d(${s.scale.x},${s.scale.y},${s.scale.z}) rotateX(${s.rotate.x}${s.rotate.xUnit}) rotateY(${s.rotate.y}${s.rotate.yUnit}) rotateZ(${s.rotate.z}${s.rotate.zUnit})`;
  };
  function channels(item, el) {
    const c = item.config,
      type = item.actionTypeId;
    const out = [];
    if (type.startsWith("TRANSFORM_")) {
      const kind =
        type === "TRANSFORM_MOVE"
          ? "move"
          : type === "TRANSFORM_SCALE"
            ? "scale"
            : "rotate";
      for (const axis of ["x", "y", "z"])
        if (c[axis + "Value"] != null)
          out.push({
            key: channelKey(kind, axis),
            kind,
            axis,
            value: c[axis + "Value"],
            unit: unit(
              c[axis + "Unit"] ||
                (kind === "rotate" ? "deg" : kind === "move" ? "px" : ""),
            ),
          });
    } else if (type === "STYLE_OPACITY")
      out.push({ key: "opacity", property: "opacity", value: c.value });
    else if (type === "GENERAL_DISPLAY")
      out.push({
        key: "display",
        property: "display",
        value: c.value,
        discrete: true,
      });
    else if (type === "STYLE_SIZE") {
      for (const dim of ["width", "height"])
        if (c[dim + "Value"] != null || c[dim + "Unit"] === "AUTO")
          out.push({
            key: dim,
            property: dim,
            value:
              c[dim + "Unit"] === "AUTO"
                ? dim === "height"
                  ? el.scrollHeight
                  : el.scrollWidth
                : c[dim + "Value"],
            unit: c[dim + "Unit"] === "AUTO" ? "px" : unit(c[dim + "Unit"]),
            auto: c[dim + "Unit"] === "AUTO",
          });
    } else if (
      type === "STYLE_BACKGROUND_COLOR" ||
      type === "STYLE_TEXT_COLOR"
    ) {
      out.push({
        key: type,
        property:
          type === "STYLE_BACKGROUND_COLOR" ? "backgroundColor" : "color",
        value: [c.rValue ?? 0, c.gValue ?? 0, c.bValue ?? 0, c.aValue ?? 1],
        color: true,
      });
    }
    return out;
  }
  function source(el, ch) {
    if (ch.kind) {
      const s = state(el),
        oldUnit = s[ch.kind][ch.axis + "Unit"];
      let v = s[ch.kind][ch.axis];
      if (ch.kind === "move" && oldUnit !== ch.unit) {
        const size = ch.axis === "x" ? el.offsetWidth : el.offsetHeight;
        if (oldUnit === "%" && ch.unit === "px") v = (v * size) / 100;
        if (oldUnit === "px" && ch.unit === "%")
          v = size ? (v * 100) / size : 0;
      }
      return v;
    }
    const v = getComputedStyle(el)[ch.property];
    if (ch.color) {
      const nums = v.match(/[\d.]+/g)?.map(Number) || [0, 0, 0, 0];
      if (nums.length === 3) nums.push(1);
      return nums.slice(0, 4);
    }
    if (ch.discrete) return v;
    let n = numeric(v);
    if (ch.unit === "%") {
      const dimension =
        ch.property === "width"
          ? el.parentElement?.clientWidth
          : el.parentElement?.clientHeight;
      n = dimension ? (n * 100) / dimension : 0;
    }
    return n;
  }
  function write(el, ch, value, final = false) {
    remember(el);
    if (ch.kind) {
      const s = state(el);
      s[ch.kind][ch.axis] = value;
      if (ch.kind !== "scale") s[ch.kind][ch.axis + "Unit"] = ch.unit;
      drawTransform(el, s);
    } else if (ch.color)
      el.style[ch.property] =
        `rgba(${value[0]},${value[1]},${value[2]},${value[3]})`;
    else
      el.style[ch.property] =
        final && ch.auto ? "auto" : String(value) + (ch.unit || "");
  }
  const interpolate = (a, b, t) =>
    Array.isArray(b)
      ? b.map((v, i) => (a[i] ?? 0) + (v - (a[i] ?? 0)) * t)
      : typeof b === "number"
        ? a + (b - a) * t
        : b;
  function schedule(el, item, owner, instant = false) {
    const duration = instant || reduced ? 0 : Number(item.config.duration) || 0,
      delay = instant || reduced ? 0 : Number(item.config.delay) || 0;
    const promises = channels(item, el).map(
      (ch) =>
        new Promise((resolve) => {
          const key = ch.key;
          let map = activeTasks.get(el);
          if (!map) {
            map = new Map();
            activeTasks.set(el, map);
          }
          const old = map.get(key);
          if (old) {
            tasks.delete(old);
            old.resolve();
          }
          const from = source(el, ch);
          if (!duration && !delay) {
            write(el, ch, ch.value, true);
            map.delete(key);
            resolve();
            return;
          }
          const task = {
            el,
            ch,
            from,
            to: ch.value,
            start: performance.now() + delay,
            duration,
            easing: ease(item.config.easing),
            owner,
            resolve,
          };
          map.set(key, task);
          tasks.add(task);
          request();
        }),
    );
    return Promise.all(promises);
  }
  function applyGroup(group, trigger, owner, instant = false) {
    return Promise.all(
      (group?.actionItems || []).flatMap((item) =>
        targets(item.config.target, trigger).map((el) =>
          schedule(el, item, owner, instant),
        ),
      ),
    );
  }
  function cancel(run) {
    if (!run) return;
    run.cancelled = true;
    for (const task of [...tasks])
      if (task.owner === run) {
        tasks.delete(task);
        activeTasks.get(task.el)?.delete(task.ch.key);
        task.resolve();
      }
  }
  function runKey(event, trigger) {
    return (
      event.id + ":" + (trigger.dataset.motionId || event.target.id || "page")
    );
  }
  async function play(event, trigger) {
    if (disposed || !active(event)) return;
    const list = motion.actionLists[event.action.config.actionListId];
    if (!list?.actionItemGroups) return;
    const key = runKey(event, trigger);
    cancel(runs.get(key));
    const stop = motion.events[event.action.config.autoStopEventId];
    if (stop) cancel(runs.get(runKey(stop, trigger)));
    const owner = { cancelled: false };
    runs.set(key, owner);
    const groups = list.actionItemGroups.slice(
      list.useFirstGroupAsInitialState ? 1 : 0,
    );
    const delay =
      Number(event.config?.delay) || Number(event.action.config.delay) || 0;
    if (delay && !reduced)
      await new Promise((resolve) => {
        const timer = setTimeout(resolve, delay);
        cleanups.push(() => {
          clearTimeout(timer);
          resolve();
        });
      });
    const canLoop =
      !reduced &&
      event.config?.loop &&
      groups.some((g) => g.actionItems.some((a) => a.config.duration > 0));
    do {
      for (const group of groups) {
        if (owner.cancelled || disposed) return;
        await applyGroup(group, trigger, owner);
      }
      if (!canLoop) break;
    } while (!owner.cancelled && !disposed);
  }
  const listen = (el, name, fn, options) => {
    el.addEventListener(name, fn, options);
    cleanups.push(() => el.removeEventListener(name, fn, options));
  };
  function addContinuous(event, trigger) {
    const list = motion.actionLists[event.action.config.actionListId];
    if (!list?.continuousParameterGroups) return;
    for (const param of Array.isArray(event.config) ? event.config : []) {
      const group = list.continuousParameterGroups.find(
        (g) => g.id === param.continuousParameterGroupId,
      );
      if (!group) continue;
      const frames = group.continuousActionGroups
        .toSorted((a, b) => a.keyframe - b.keyframe)
        .map((f) => ({
          key: f.keyframe,
          items: f.actionItems.flatMap((item) =>
            targets(item.config.target, trigger).map((el) => ({ el, item })),
          ),
        }));
      const track = {
        event,
        trigger,
        param,
        type: group.type,
        frames,
        current: param.restingState ?? 0,
        target: param.restingState ?? 0,
      };
      continuous.push(track);
      if (group.type === "MOUSE_X" || group.type === "MOUSE_Y") {
        listen(trigger, "pointermove", (e) => {
          const r = trigger.getBoundingClientRect();
          track.target =
            100 *
            clamp(
              group.type === "MOUSE_X"
                ? (e.clientX - r.left) / r.width
                : (e.clientY - r.top) / r.height,
            );
          if (param.reverse) track.target = 100 - track.target;
          request();
        });
        listen(trigger, "pointerleave", () => {
          track.target = param.restingState ?? 50;
          request();
        });
      }
    }
  }
  function drawContinuous(track) {
    const { frames } = track;
    if (!frames.length) return;
    const value = track.current;
    let low = frames[0],
      high = frames.at(-1);
    for (let i = 0; i < frames.length - 1; i++)
      if (value >= frames[i].key && value <= frames[i + 1].key) {
        low = frames[i];
        high = frames[i + 1];
        break;
      }
    if (value <= frames[0].key) high = low = frames[0];
    if (value >= frames.at(-1).key) high = low = frames.at(-1);
    const t =
      high.key === low.key
        ? 1
        : clamp((value - low.key) / (high.key - low.key));
    for (let i = 0; i < high.items.length; i++) {
      const { el, item } = high.items[i];
      const earlier =
        low.items.find(
          (x) => x.el === el && x.item.actionTypeId === item.actionTypeId,
        )?.item || item;
      const fromChannels = channels(earlier, el),
        toChannels = channels(item, el);
      for (const ch of toChannels) {
        const previous = fromChannels.find((c) => c.key === ch.key) || ch;
        write(el, ch, interpolate(previous.value, ch.value, t), t === 1);
      }
    }
  }
  function request() {
    if (!frame && !disposed) frame = requestAnimationFrame(tick);
  }
  function tick(now) {
    frame = 0;
    if (disposed) return;
    for (const task of [...tasks]) {
      if (now < task.start) continue;
      const progress = task.duration
        ? clamp((now - task.start) / task.duration)
        : 1;
      write(
        task.el,
        task.ch,
        task.ch.discrete
          ? task.to
          : interpolate(task.from, task.to, task.easing(progress)),
        progress === 1,
      );
      if (progress === 1) {
        tasks.delete(task);
        activeTasks.get(task.el)?.delete(task.ch.key);
        task.resolve();
      }
    }
    let settling = false;
    for (const track of continuous) {
      if (!active(track.event)) continue;
      const delta = track.target - track.current;
      const shouldDraw = !track.drawn || Math.abs(delta) > 0.001;
      if (Math.abs(delta) > 0.001) {
        track.current +=
          delta *
          (reduced
            ? 1
            : Math.max(0.02, 1 - (track.param.smoothing || 0) / 100));
        if (Math.abs(delta) < 0.01) track.current = track.target;
        settling = true;
      }
      if (shouldDraw) {
        drawContinuous(track);
        track.drawn = true;
      }
    }
    if (tasks.size || settling) request();
  }
  const entries = [];
  for (const event of Object.values(motion.events)) {
    if (!active(event)) continue;
    for (const trigger of targets(event.target)) {
      entries.push({ event, trigger });
    }
  }
  root.dataset.motionReady = "true";
  root.dataset.motionEvents = String(entries.length);
  const initialized = new Set();
  for (const { event, trigger } of entries) {
    const list = motion.actionLists[event.action.config.actionListId];
    if (!list) continue;
    const key = list.id + ":" + (trigger.dataset.motionId || "page");
    if (list.useFirstGroupAsInitialState && !initialized.has(key)) {
      initialized.add(key);
      applyGroup(list.actionItemGroups[0], trigger, null, true);
    }
  }
  const clickEvents = new WeakMap(),
    clickCounts = new WeakMap();
  for (const { event, trigger } of entries) {
    const type = event.eventTypeId;
    if (type === "SCROLL_INTO_VIEW") {
      if (reduced) {
        play(event, trigger);
        continue;
      }
      const offset = Number(event.config?.scrollOffsetValue) || 0;
      const px =
        event.config?.scrollOffsetUnit === "%"
          ? (innerHeight * offset) / 100
          : offset;
      const observer = new IntersectionObserver(
        (changes) => {
          for (const change of changes)
            if (change.isIntersecting) {
              play(event, trigger);
              if (!event.config?.loop) observer.unobserve(trigger);
            }
        },
        { rootMargin: `0px 0px -${px}px 0px`, threshold: 0 },
      );
      observer.observe(trigger);
      cleanups.push(() => observer.disconnect());
    } else if (type === "PAGE_FINISH") {
      if (!reduced) play(event, trigger);
    } else if (type === "MOUSE_OVER" || type === "MOUSE_OUT") {
      listen(
        trigger,
        type === "MOUSE_OVER" ? "pointerenter" : "pointerleave",
        () => {
          if (matchMedia("(hover:hover)").matches) play(event, trigger);
        },
      );
      listen(trigger, type === "MOUSE_OVER" ? "focusin" : "focusout", () =>
        play(event, trigger),
      );
    } else if (type === "DROPDOWN_OPEN" || type === "DROPDOWN_CLOSE")
      listen(
        trigger,
        type === "DROPDOWN_OPEN"
          ? "elearna:dropdown-open"
          : "elearna:dropdown-close",
        () => play(event, trigger),
      );
    else if (type === "NAVBAR_OPEN" || type === "NAVBAR_CLOSE")
      listen(
        trigger,
        type === "NAVBAR_OPEN" ? "elearna:navbar-open" : "elearna:navbar-close",
        () => play(event, trigger),
      );
    else if (type === "SLIDER_ACTIVE")
      listen(trigger, "elearna:slide-active", () => play(event, trigger));
    else if (type === "MOUSE_CLICK" || type === "MOUSE_SECOND_CLICK") {
      listen(trigger, "click", (e) => {
        let count = clickEvents.get(e);
        if (count == null) {
          count = (clickCounts.get(trigger) || 0) + 1;
          clickCounts.set(trigger, count);
          clickEvents.set(e, count);
        }
        if (
          (type === "MOUSE_CLICK" && count % 2 === 1) ||
          (type === "MOUSE_SECOND_CLICK" && count % 2 === 0)
        )
          play(event, trigger);
      });
    } else if (
      ["PAGE_SCROLL", "SCROLLING_IN_VIEW", "MOUSE_MOVE"].includes(type)
    )
      addContinuous(event, trigger);
  }
  let lastScroll = scrollY;
  const scrollDirections = entries.filter(
    ({ event }) =>
      event.eventTypeId === "PAGE_SCROLL_UP" ||
      event.eventTypeId === "PAGE_SCROLL_DOWN",
  );
  function updateScroll() {
    const max = Math.max(
      1,
      document.documentElement.scrollHeight - innerHeight,
    );
    for (const track of continuous) {
      if (track.type !== "SCROLL_PROGRESS") continue;
      if (track.event.eventTypeId === "PAGE_SCROLL")
        track.target = 100 * clamp(scrollY / max);
      else {
        const rect = track.trigger.getBoundingClientRect();
        const start = track.param.addStartOffset
          ? (innerHeight * (track.param.addOffsetValue || 0)) / 100
          : 0;
        track.target =
          100 *
          clamp(
            (innerHeight - rect.top - start) /
              Math.max(1, innerHeight + rect.height - start),
          );
      }
    }
    const dy = scrollY - lastScroll;
    if (Math.abs(dy) > 3) {
      for (const { event, trigger } of scrollDirections)
        if (
          (dy < 0 && event.eventTypeId === "PAGE_SCROLL_UP") ||
          (dy > 0 && event.eventTypeId === "PAGE_SCROLL_DOWN")
        )
          play(event, trigger);
      lastScroll = scrollY;
    }
    request();
  }
  listen(window, "scroll", updateScroll, { passive: true });
  listen(window, "resize", updateScroll, { passive: true });
  updateScroll();
  // Replay slider image state for the initial active slide after all listeners bind.
  for (const el of query(root, '.w-slide:not([aria-hidden="true"])'))
    el.dispatchEvent(new CustomEvent("elearna:slide-active"));
  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    for (const cleanup of cleanups) cleanup();
    for (const task of tasks) task.resolve();
    tasks.clear();
    for (const [el, style] of originalStyles) {
      if (style == null) el.removeAttribute("style");
      else el.setAttribute("style", style);
    }
  };
}

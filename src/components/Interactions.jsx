import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStore } from "./Store";
import { submitForm } from "../services/api";
const DropdownContext = createContext(null),
  TabsContext = createContext(null),
  NavContext = createContext(null),
  SliderContext = createContext(null);
const emit = (el, name) =>
  el?.dispatchEvent(new CustomEvent("elearna:" + name));
const has = (props, c) => (props.className || "").split(/\s+/).includes(c);
const cx = (...s) => s.filter(Boolean).join(" ");

export function SiteLink({ href = "", children, className = "", ...props }) {
  const location = useLocation(),
    nav = useContext(NavContext),
    drop = useContext(DropdownContext);
  const store = useStore();
  const internal = href.startsWith("/") && !href.startsWith("//");
  function onClick(event) {
    if (href === "#") {
      event.preventDefault();
      return;
    }
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    nav?.setOpen(false);
    drop?.setOpen(false);
  }
  if (internal) {
    const active = location.pathname === href;
    return (
      <Link
        {...props}
        to={href}
        onClick={onClick}
        className={cx(className, active && "w--current")}
        aria-current={active ? "page" : undefined}
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      {...props}
      href={href || undefined}
      onClick={onClick}
      className={className}
      rel={props.target === "_blank" ? "noopener noreferrer" : props.rel}
    >
      {children}
    </a>
  );
}

function Dropdown({ as: Tag = "div", children, ...props }) {
  const [open, setOpen] = useState(false),
    ref = useRef(null),
    id = useId();
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    emit(ref.current, open ? "dropdown-open" : "dropdown-close");
  }, [open]);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const outside = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    const escape = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        ref.current?.querySelector('[role="button"]')?.focus();
      }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);
  const hover = props["data-hover"] === "true";
  return (
    <DropdownContext.Provider value={{ open, setOpen, id, hover }}>
      <Tag
        {...props}
        ref={ref}
        className={cx(props.className, open && "is-open")}
        onMouseEnter={
          hover
            ? () => {
                if (matchMedia("(hover:hover)").matches) setOpen(true);
              }
            : undefined
        }
        onMouseLeave={hover ? () => setOpen(false) : undefined}
      >
        {children}
      </Tag>
    </DropdownContext.Provider>
  );
}
function DropdownToggle({ as: Tag = "div", children, ...props }) {
  const ctx = useContext(DropdownContext);
  if (!ctx) return <Tag {...props}>{children}</Tag>;
  const toggle = (e) => {
    e.stopPropagation();
    ctx.setOpen((x) =>
      ctx.hover && e.detail > 0 && matchMedia("(hover:hover)").matches
        ? true
        : !x,
    );
  };
  return (
    <Tag
      {...props}
      role="button"
      tabIndex={0}
      aria-expanded={ctx.open}
      aria-controls={ctx.id}
      className={cx(props.className, ctx.open && "w--open")}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle(e);
        }
      }}
    >
      {children}
    </Tag>
  );
}
function DropdownList({ as: Tag = "nav", children, style, ...props }) {
  const ctx = useContext(DropdownContext);
  return (
    <Tag
      {...props}
      id={ctx?.id}
      hidden={!ctx?.open}
      className={cx(props.className, ctx?.open && "w--open")}
      style={{
        ...style,
        display: ctx?.open ? "block" : "none",
        height: "auto",
      }}
    >
      {children}
    </Tag>
  );
}
function Tabs({ as: Tag = "div", children, ...props }) {
  const [active, setActive] = useState(props["data-current"] || "Tab 1"),
    id = useId();
  return (
    <TabsContext.Provider value={{ active, setActive, id }}>
      <Tag {...props}>{children}</Tag>
    </TabsContext.Provider>
  );
}
function TabButton({ children, ...props }) {
  const ctx = useContext(TabsContext),
    value = props["data-w-tab"],
    selected = ctx?.active === value;
  return (
    <button
      {...props}
      type="button"
      role="tab"
      id={ctx?.id + "-" + value.replaceAll(" ", "-")}
      aria-selected={selected}
      aria-controls={ctx?.id + "-panel-" + value.replaceAll(" ", "-")}
      tabIndex={selected ? 0 : -1}
      className={cx(props.className, selected && "w--current")}
      onClick={() => ctx?.setActive(value)}
      onKeyDown={(event) => {
        if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) {
          event.preventDefault();
          const buttons = [
              ...event.currentTarget.parentElement.querySelectorAll(
                '[role="tab"]',
              ),
            ],
            i = buttons.indexOf(event.currentTarget);
          buttons[
            event.key === "Home"
              ? 0
              : event.key === "End"
                ? buttons.length - 1
                : (i + (event.key === "ArrowRight" ? 1 : -1) + buttons.length) %
                  buttons.length
          ]?.click();
          buttons[
            event.key === "Home"
              ? 0
              : event.key === "End"
                ? buttons.length - 1
                : (i + (event.key === "ArrowRight" ? 1 : -1) + buttons.length) %
                  buttons.length
          ]?.focus();
        }
      }}
    >
      {children}
    </button>
  );
}
function TabPanel({ as: Tag = "div", children, ...props }) {
  const ctx = useContext(TabsContext),
    value = props["data-w-tab"],
    selected = ctx?.active === value;
  return (
    <Tag
      {...props}
      id={ctx?.id + "-panel-" + value.replaceAll(" ", "-")}
      role="tabpanel"
      aria-labelledby={ctx?.id + "-" + value.replaceAll(" ", "-")}
      hidden={!selected}
      className={cx(
        (props.className || "").replace(/w--tab-active/g, ""),
        selected && "w--tab-active",
      )}
      style={{ ...props.style, display: selected ? "block" : "none" }}
    >
      {children}
    </Tag>
  );
}
function Navbar({ as: Tag = "div", children, ...props }) {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false),
    id = useId();
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <NavContext.Provider value={{ open, setOpen, id }}>
      <Tag
        {...props}
        className={cx(
          props.className,
          scrolled && "is-scrolled",
          open && "nav-is-open",
        )}
      >
        {children}
      </Tag>
    </NavContext.Provider>
  );
}
function NavMenu({ as: Tag = "nav", children, ...props }) {
  const ctx = useContext(NavContext);
  return (
    <Tag
      {...props}
      id={ctx?.id}
      className={cx(props.className, ctx?.open && "mobile-open")}
    >
      {children}
    </Tag>
  );
}
function NavButton({ children, ...props }) {
  const ctx = useContext(NavContext),
    ref = useRef(null);
  useLayoutEffect(() => {
    emit(ref.current, ctx?.open ? "navbar-open" : "navbar-close");
  }, [ctx?.open]);
  return (
    <button
      ref={ref}
      {...props}
      type="button"
      aria-label={ctx?.open ? "Close menu" : "Open menu"}
      aria-expanded={!!ctx?.open}
      aria-controls={ctx?.id}
      className={cx(props.className, ctx?.open && "w--open")}
      onClick={() => ctx?.setOpen((x) => !x)}
    >
      {children}
    </button>
  );
}
const countSlides = (children) =>
  Children.toArray(children).reduce(
    (sum, child) =>
      sum +
      (!React.isValidElement(child)
        ? 0
        : has(child.props, "w-slide")
          ? 1
          : countSlides(child.props.children)),
    0,
  );
function Slider({ as: Tag = "div", children, ...props }) {
  const [active, setActive] = useState(0),
    count = Math.max(countSlides(children), 1),
    paused = useRef(false),
    start = useRef(0);
  const move = (n) => setActive((i) => (i + n + count) % count);
  useEffect(() => {
    if (props["data-autoplay"] !== "true") return;
    const timer = setInterval(
      () => {
        if (!paused.current) setActive((i) => (i + 1) % count);
      },
      Number(props["data-delay"]) || 6000,
    );
    return () => clearInterval(timer);
  }, [count, props["data-autoplay"], props["data-delay"]]);
  return (
    <SliderContext.Provider
      value={{
        active,
        setActive,
        move,
        count,
        duration: Number(props["data-duration"]) || 500,
        easing: props["data-easing"] || "ease",
      }}
    >
      <Tag
        {...props}
        role="region"
        aria-roledescription="carousel"
        aria-label="Testimonials"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        onTouchStart={(e) => (start.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const delta = e.changedTouches[0].clientX - start.current;
          if (Math.abs(delta) > 45) move(delta < 0 ? 1 : -1);
        }}
      >
        {children}
      </Tag>
    </SliderContext.Provider>
  );
}
function Slide({ as: Tag = "div", children, slideIndex = 0, ...props }) {
  const ctx = useContext(SliderContext),
    active = ctx?.active === slideIndex,
    ref = useRef(null);
  useLayoutEffect(() => {
    if (active) emit(ref.current, "slide-active");
  }, [active]);
  return (
    <Tag
      ref={ref}
      {...props}
      aria-hidden={!active}
      inert={!active}
      role="group"
      aria-roledescription="slide"
      aria-label={`${slideIndex + 1} of ${ctx?.count}`}
      style={{
        ...props.style,
        gridArea: "1 / 1",
        width: "100%",
        minWidth: 0,
        display: "block",
        opacity: active ? 1 : 0,
        visibility: active ? "visible" : "hidden",
        pointerEvents: active ? "auto" : "none",
        transition: `opacity ${ctx?.duration}ms ${ctx?.easing}, visibility 0s ${active ? 0 : ctx?.duration}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
function SliderArrow({ children, ...props }) {
  const ctx = useContext(SliderContext),
    left = has(props, "w-slider-arrow-left");
  return (
    <button
      {...props}
      type="button"
      aria-label={left ? "Previous slide" : "Next slide"}
      onClick={() => ctx?.move(left ? -1 : 1)}
    >
      {children}
    </button>
  );
}
function SliderDots(props) {
  const ctx = useContext(SliderContext);
  return (
    <div {...props}>
      {Array.from({ length: ctx?.count || 0 }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          aria-current={ctx.active === i ? "true" : undefined}
          className={cx("w-slider-dot", ctx.active === i && "w-active")}
          onClick={() => ctx.setActive(i)}
        />
      ))}
    </div>
  );
}
function Counter({
  as: Tag = "div",
  counterValue = "0",
  counterClass,
  children,
  ...props
}) {
  const [value, setValue] = useState(0),
    ref = useRef(null);
  useEffect(() => {
    const target = Number(counterValue) || 0;
    let frame;
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();
      const start = performance.now(),
        duration = matchMedia("(prefers-reduced-motion: reduce)").matches
          ? 0
          : 1000;
      function tick(now) {
        const t = duration ? Math.min(1, (now - start) / duration) : 1;
        setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
        if (t < 1) frame = requestAnimationFrame(tick);
      }
      frame = requestAnimationFrame(tick);
    });
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [counterValue]);
  return (
    <Tag {...props} ref={ref}>
      <div className={counterClass}>{value}</div>
    </Tag>
  );
}
function Lightbox({ children, ...props }) {
  const [open, setOpen] = useState(false);
  const store = useStore();
  return (
    <>
      <button
        {...props}
        type="button"
        aria-label="Play course preview"
        onClick={() => setOpen(true)}
      >
        {children}
      </button>
      {open && (
        <div
          className="fixed inset-0 z-[20000] flex items-center justify-center bg-black/85 p-5"
          role="dialog"
          aria-modal="true"
          aria-label="Course preview"
        >
          <div className="max-w-2xl rounded-2xl bg-[#102c30] p-8 text-white">
            <button
              className="float-right text-2xl"
              aria-label="Close preview"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <h2 className="text-white">Course preview</h2>
            <p>
              This reference uses an external video. Enroll in a course to
              access lessons.
            </p>
            <SiteLink href="/course-one" className="button button-yellow">
              Explore courses
            </SiteLink>
          </div>
        </div>
      )}
    </>
  );
}
export function Interactive({ as = "div", ...props }) {
  if (has(props, "w-dropdown")) return <Dropdown as={as} {...props} />;
  if (has(props, "w-dropdown-toggle"))
    return <DropdownToggle as={as} {...props} />;
  if (has(props, "w-dropdown-list")) return <DropdownList as={as} {...props} />;
  if (has(props, "w-tabs")) return <Tabs as={as} {...props} />;
  if (has(props, "w-tab-link")) return <TabButton {...props} />;
  if (has(props, "w-tab-pane")) return <TabPanel as={as} {...props} />;
  if (has(props, "w-tab-menu"))
    return React.createElement(as, { ...props, role: "tablist" });
  if (has(props, "w-nav")) return <Navbar as={as} {...props} />;
  if (has(props, "w-nav-menu")) return <NavMenu as={as} {...props} />;
  if (has(props, "w-nav-button")) return <NavButton {...props} />;
  if (has(props, "w-slider")) return <Slider as={as} {...props} />;
  if (has(props, "w-slide")) return <Slide as={as} {...props} />;
  if (has(props, "w-slider-arrow-left") || has(props, "w-slider-arrow-right"))
    return <SliderArrow {...props} />;
  if (has(props, "w-slider-nav")) return <SliderDots {...props} />;
  if (has(props, "counter-train-wrapper"))
    return <Counter as={as} {...props} />;
  if (has(props, "w-lightbox")) return <Lightbox {...props} />;
  return React.createElement(as, props);
}
export function CartButton({ children, ...props }) {
  const store = useStore();
  return (
    <button
      {...props}
      type="button"
      aria-label={`Open cart, ${store.count} items`}
      onClick={() => store.setCartOpen(true)}
    >
      {children}
    </button>
  );
}
export function CartCount({ children, ...props }) {
  const { count } = useStore();
  return (
    <div {...props} aria-live="polite">
      {count}
    </div>
  );
}
export function AuthButton({ children, ...props }) {
  const { user, setUser, setNotice } = useStore();
  const navigate = useNavigate();
  return (
    <button
      {...props}
      type="button"
      onClick={() => {
        if (user) {
          setUser(null);
          setNotice("You have signed out of the preview.");
        } else navigate("/log-in");
      }}
    >
      {user ? "Logout" : "Login"}
    </button>
  );
}

export function SiteForm({
  children,
  formKind = "contact",
  route = "",
  ...props
}) {
  const [status, setStatus] = useState(""),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(false),
    store = useStore(),
    navigate = useNavigate();
  const auth = ["login", "signup"].includes(formKind);
  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setError("");
    setStatus("");
    const data = Object.fromEntries(new FormData(form));
    if (formKind === "cart") {
      const id = route.split("/").pop();
      const quantity = Math.max(1, Math.min(99, Number(data.quantity) || 1));
      store.add(id, quantity);
      return;
    }
    if (formKind === "protected") {
      setError(
        "This page is protected on the reference site. Its private content is not included.",
      );
      return;
    }
    setBusy(true);
    try {
      const result = await submitForm(formKind, data, { route });
      if (auth) {
        const email =
          data.Email ||
          data.email ||
          form.querySelector('input[type="email"]')?.value;
        store.setUser({
          email,
          name:
            form.querySelector("#wf-sign-up-name")?.value ||
            email?.split("@")[0],
          preview: result.demo,
        });
        store.setNotice(
          result.demo
            ? "Preview session started on this device."
            : "You are signed in.",
        );
        navigate("/home-one");
      } else {
        setStatus(result.message);
        if (!/reset/i.test(formKind)) form.reset();
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <form {...props} onSubmit={onSubmit} aria-busy={busy}>
      {children}
      {auth && !import.meta.env.VITE_API_BASE_URL && (
        <p className="mt-5 text-sm text-white/70">
          Preview account only. No real account is created. Passwords are never
          stored.
        </p>
      )}
      {status && (
        <div
          role="status"
          className="mt-5 rounded-lg border border-emerald-400/30 bg-emerald-50 p-4 text-sm text-emerald-900"
        >
          {status}
        </div>
      )}
      {error && (
        <div
          role="alert"
          className="mt-5 rounded-lg bg-red-50 p-4 text-sm text-red-800"
        >
          {error}
        </div>
      )}
      {busy && (
        <p role="status" className="mt-3 text-sm">
          Please wait…
        </p>
      )}
    </form>
  );
}

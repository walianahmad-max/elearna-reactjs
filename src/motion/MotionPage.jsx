import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { attachMotion } from "./engine";
const mediaKey = () =>
  typeof window === "undefined"
    ? "main"
    : window.innerWidth >= 992
      ? "main"
      : window.innerWidth >= 768
        ? "medium"
        : window.innerWidth >= 480
          ? "small"
          : "tiny";
/** Bind only after the lazy route and its interaction data have both resolved. */
export function MotionPage({ pageId, config, children }) {
  const ref = useRef(null),
    [breakpoint, setBreakpoint] = useState(mediaKey);
  useEffect(() => {
    const update = () => setBreakpoint(mediaKey());
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);
  useLayoutEffect(
    () => attachMotion(ref.current, pageId, config),
    [pageId, config, breakpoint],
  );
  return (
    <div ref={ref} className="motion-page" style={{ display: "contents" }}>
      {children}
    </div>
  );
}

import React, { Suspense, lazy, useLayoutEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import routes from "./data/routes.json";
import { loadRoute } from "./services/page-loader";
import { StoreProvider } from "./components/Store";
import { CartDrawer, Notice } from "./components/Commerce";
const pages = routes.map((route) => ({
  ...route,
  Component: lazy(() => loadRoute(route.path)),
}));
function RouteEffects() {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    const route =
      routes.find((r) => r.path === pathname) ||
      routes.find((r) => r.path === "/404");
    document.title = route?.title || "Elearna";
    document.body.className = route?.bodyClass || "";
    document.documentElement.setAttribute("data-wf-page", route?.wfPage || "");
    if (hash) {
      requestAnimationFrame(() =>
        document
          .getElementById(decodeURIComponent(hash.slice(1)))
          ?.scrollIntoView(),
      );
    } else window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}
function PolicyPage({ title }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#102c30] p-6">
      <div className="max-w-xl rounded-2xl bg-white p-8">
        <h1 className="text-3xl">{title}</h1>
        <p>
          The reference website links to a placeholder for this document. Add
          your own policy before using the site with real accounts.
        </p>
        <Link to="/sign-up" className="button button-yellow">
          Back to registration
        </Link>
      </div>
    </main>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <a className="skip-link" href="#page-content">
          Skip to content
        </a>
        <RouteEffects />
        <Suspense
          fallback={
            <div
              role="status"
              className="flex min-h-screen items-center justify-center bg-[#102c30] text-white"
            >
              Loading Elearna…
            </div>
          }
        >
          <div id="page-content">
            <Routes>
              <Route path="/" element={<Navigate replace to="/home-one" />} />
              {pages.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
              <Route
                path="/privacy-policy"
                element={<PolicyPage title="Privacy policy" />}
              />
              <Route
                path="/terms-of-service"
                element={<PolicyPage title="Terms of service" />}
              />
              <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
          </div>
        </Suspense>
        <CartDrawer />
        <Notice />
      </StoreProvider>
    </BrowserRouter>
  );
}

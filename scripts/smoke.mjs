import fs from "node:fs";
import React from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { createServer } from "vite";
const routes = JSON.parse(fs.readFileSync("src/data/routes.json", "utf8"));
const server = await createServer({
  configLoader: "native",
  server: { middlewareMode: true },
  appType: "custom",
});
const { StoreProvider } = await server.ssrLoadModule(
  "/src/components/Store.jsx",
);
const results = [];
try {
  for (const route of routes) {
    try {
      const { default: Page } = await server.ssrLoadModule(
        "/src/pages/" + route.file,
      );
      const html = renderToString(
        React.createElement(
          MemoryRouter,
          { initialEntries: [route.path] },
          React.createElement(StoreProvider, null, React.createElement(Page)),
        ),
      );
      if (html.length < 100) throw Error("Unexpected empty output");
      results.push({ path: route.path, ok: true, bytes: html.length });
    } catch (error) {
      results.push({ path: route.path, ok: false, error: error.message });
    }
  }
} finally {
  await server.close();
}
const failed = results.filter((r) => !r.ok);
console.log(
  JSON.stringify(
    {
      rendered: results.length,
      passed: results.length - failed.length,
      failed,
    },
    null,
    2,
  ),
);
fs.writeFileSync("smoke-report.json", JSON.stringify(results, null, 2));
if (failed.length) process.exitCode = 1;

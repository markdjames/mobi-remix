var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:/Users/ben/ampt/ampt-templates/remix/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/ben/ampt/ampt-templates/remix/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2 = "/css-bundle-RYCNHUHY.css";
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_dist()), import_react2 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime"), favicon = {
  rel: "icon",
  href: "/public/favicon.ico",
  type: "image/x-icon"
}, links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }, favicon] : [favicon]
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { style: { margin: 0 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  css: () => css,
  default: () => Index,
  meta: () => meta
});

// public/ampt.svg
var ampt_default = "/_assets/ampt-EZY7RSQX.svg";

// app/routes/_index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime"), meta = () => [
  { title: "Ampt + Remix" },
  { name: "description", content: "Welcome to Remix on Ampt!" }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "column", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "circle", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { width: "150", height: "150", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("image", { href: ampt_default, x: "0", y: "0", width: "150", height: "150" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h5", { children: "Welcome to Remix on Ampt!" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { marginTop: "25px" } }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { children: [
      "Run ",
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "code", children: "ampt dev" }),
      " to start the development server"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { style: { marginBottom: "10px" }, children: [
      "Edit this page by modifying",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "code", children: "app/routes/_index.tsx" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { children: [
      "Deploy your changes by running ",
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "code", children: "build" }),
      " in the Ampt shell to see your changes at your sandbox url"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "spacing" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { children: [
      "Run",
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "code", children: "ampt deploy" }),
      " to deploy to a stage environment"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "spacing" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { style: { marginBottom: "5px" }, children: [
      "Learn more about Ampt by checking out our",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { rel: "noreferrer", href: "https://getampt.com/docs", target: "_blank", children: "docs" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { children: [
      "Learn more about Remix by checking out their",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "a",
        {
          rel: "noreferrer",
          href: "https://remix.run/docs/en/main",
          target: "_blank",
          children: "docs"
        }
      )
    ] })
  ] }) });
}
var css = `
@keyframes GradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/entry.client-ICTVHTIV.js", imports: ["/_shared/chunk-QX4LM4GD.js", "/_shared/chunk-S7D5K2Y5.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/root-OMVC4CHJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/routes/_index-YIUQTOYC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "501fb2d4", hmr: void 0, url: "/manifest-501FB2D4.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "static", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/

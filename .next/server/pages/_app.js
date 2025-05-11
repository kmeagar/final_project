const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_eba23366._.js");
runtime.loadChunk("server/chunks/ssr/[root-of-the-server]__6d6db976._.js");
runtime.getOrInstantiateRuntimeModule("[project]/foodfinder-application/pages/_app.tsx [ssr] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/foodfinder-application/pages/_app.tsx [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;

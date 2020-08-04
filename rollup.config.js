import json from "@rollup/plugin-json";
import url from "@rollup/plugin-url";
import embedCSS from "rollup-plugin-embed-css";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
export default {
  input: "src/main.js",
  output: {
    file: "dist/DropRecognition.js",
    format: "es"
  },
  plugins: [
    nodeResolve({
      browser: true
    }),
    json(),
    url({
      include: ["**/*.woff"],
      limit: 30720
    }),
    embedCSS({}),
    commonjs()
  ]
};

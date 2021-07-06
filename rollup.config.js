import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import linaria from "@linaria/rollup";
import css from "rollup-plugin-css-only";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({
      include: ["node_modules/**"],
      namedExports: {
        "node_modules/react/react.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement",
        ],
        "node_modules/react/index.js": [
          "useState",
          "useEffect",
          "useLayoutEffect",
          "useCallback",
          "useRef",
          "RefObject",
        ],
        "node_modules/react-dom/index.js": ["render"],
      },
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    copy({
      targets: [
        {
          src: ["src/reset.scss", "src/index.scss"],
          dest: "build/style",
        },
      ],
    }),
    linaria({
      sourceMap: process.env.NODE_ENV !== "production",
    }),
    css({
      output: "styles.css",
    }),
  ],
  external: ["react", "react-dom"],
};

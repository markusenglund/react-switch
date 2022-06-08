import babel from "rollup-plugin-babel";
import buble from "rollup-plugin-buble";
import { terser } from "rollup-plugin-terser";
import path from "path";

// import { terser } from "rollup-plugin-terser";

/**
 * @type { [import('rollup').Plugin] }
 */
const prodPlugins = [
  babel({
    babelrc: false,
    plugins: [
      [
        "transform-react-remove-prop-types",
        {
          removeImport: true,
          additionalLibraries: ["./hexColorPropType"]
        }
      ]
    ]
  }),
  terser({
    mangle: {
      properties: { regex: /^\$/ }
    },
    compress: {
      pure_getters: true
    }
  })
]

/**
 * @type { [import('rollup').Plugin] }
 */
const commonPlugins = [
  buble({ objectAssign: true }),
  babel({
    babelrc: false,
    plugins: ["@babel/plugin-transform-object-assign"]
  })
];


/**
 * @type { [import('rollup').RollupOptions] }
 */
const configs = [
  {
    input: "src/index.jsx",
    output: [
      {
        format: "cjs",
        file: path.resolve(__dirname, "dist", "index.dev.js"),
        interop: false,
        strict: false,
        exports: "named"
      },
      {
        format: "esm",
        file: path.resolve(__dirname, "dist", "index.dev.mjs"),
        interop: false,
        strict: false,
        exports: "named"

      }
    ],
    plugins: commonPlugins,
    external: ["react", "prop-types"]
  },
  {
    input: "src/index.jsx",
    output: [
      {
        format: "cjs",
        file: path.resolve(__dirname, "dist", "index.prod.js"),
        interop: false,
        strict: false,
        exports: "named"
      },
      {
        format: "esm",
        file: path.resolve(__dirname, "dist", "index.prod.mjs"),
        interop: false,
        strict: false,
        exports: "named"

      }
    ],
    plugins: commonPlugins.concat(prodPlugins),
    external: ["react", "prop-types"]
  }
]

export default configs
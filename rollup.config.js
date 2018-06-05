import babel from "rollup-plugin-babel";
import buble from "rollup-plugin-buble";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "src/index.jsx",
  output: {
    file: "dist/react-switch.prod.js",
    format: "cjs"
  },
  plugins: [
    buble(),
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
    uglify({
      mangle: {
        properties: { regex: /^\$/ }
      },
      compress: {
        pure_getters: true
      }
    })
  ],
  external: ["react", "prop-types"]
};

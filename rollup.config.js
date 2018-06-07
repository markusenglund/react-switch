import babel from "rollup-plugin-babel";
import buble from "rollup-plugin-buble";
import { uglify } from "rollup-plugin-uglify";

const config = {
  input: "src/index.jsx",
  output: {
    format: "cjs",
    interop: false,
    strict: false
  },
  plugins: [buble()],
  external: ["react", "prop-types"]
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(
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
  );
}

export default config;

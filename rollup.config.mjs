import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";

export default [
    {
        input: "src/index.ts",
        output: [
            { file: "dist/index.js", format: "cjs", sourcemap: true },
            { file: "dist/index.esm.js", format: "esm", sourcemap: true },
        ],
        plugins: [
            resolve({ extensions: [".js", ".ts", ".tsx"] }), // ✅ Ensure Rollup processes .tsx
            babel({
                babelHelpers: "bundled",
                extensions: [".ts", ".tsx"], // ✅ Ensure Babel handles TSX
                presets: ["@babel/preset-react"], // ✅ Enable JSX transformation
            }),
            commonjs(),
        ],
        external: ["react", "react-dom", "@mui/material", "@tanstack/react-query", "axios"],
    },
    {
        input: "src/index.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
];

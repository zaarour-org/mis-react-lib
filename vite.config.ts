import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: "src/index.ts",
            name: "MisReactLib",
            fileName: (format) => `mis-react-lib.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom", "@mui/material", "@tanstack/react-query", "axios"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
});

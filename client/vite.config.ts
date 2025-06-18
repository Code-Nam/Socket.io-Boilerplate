import path from "path";
import { build, defineConfig } from "vite";

export default defineConfig({
    resolve: {
        alias: {
            shared: "/../shared",
        },
    },
});

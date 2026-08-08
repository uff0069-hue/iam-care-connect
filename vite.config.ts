import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/iam-care-connect/",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});

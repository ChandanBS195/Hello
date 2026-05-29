import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Build a Vercel deployment bundle (.vercel/output) instead of Cloudflare.
  nitro: {
    preset: "vercel",
  },
});

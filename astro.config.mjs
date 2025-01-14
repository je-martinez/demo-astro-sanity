// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";
import dotenv from "dotenv";

dotenv.config();
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";

const { PUBLIC_PROJECT_ID, PUBLIC_DATASET } = loadEnv(
  process.env.NODE_ENV || "development",
  process.cwd(),
  ""
);

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sanity({
      projectId: PUBLIC_PROJECT_ID,
      dataset: PUBLIC_DATASET,
      useCdn: false,
      studioBasePath: "/admin",
    }),
  ],
});

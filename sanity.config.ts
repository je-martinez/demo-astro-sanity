import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { sanityClient } from "sanity:client";
import { schemaTypes } from "./schemas";

const { projectId, dataset } = sanityClient.config();

export default defineConfig({
  name: "demo",
  title: "Demo",
  projectId: projectId ?? "",
  dataset: dataset ?? "",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});

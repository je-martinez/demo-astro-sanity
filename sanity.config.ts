import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { sanityClient } from "sanity:client";
import { schemaTypes } from "./schemas";

const { projectId, dataset } = sanityClient.config();

export default defineConfig({
  name: "demo",
  title: "Demo",
  projectId: projectId ?? "",
  dataset: dataset ?? "",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});

/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

interface ImportMetaEnv {
  readonly PUBLIC_PROJECT_ID: string;
  readonly PUBLIC_DATASET: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

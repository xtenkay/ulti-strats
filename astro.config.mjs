import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import pagefind from "astro-pagefind";
import mdx from "@astrojs/mdx";
import { fileURLToPath } from "url";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

// Remark
import remarkSectionize from "./src/utils/remark/sectionize";


const projectRootDir = path.dirname(fileURLToPath(import.meta.url));


// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    tailwind(),
    expressiveCode({
      theme: "synthwave-84",
      code: {
        lineNumbers: true,
        highlight: true,
      },
      plugins: [pluginLineNumbers()],
    }),
    mdx(),
    pagefind(),
  ],
  markdown: {
    remarkPlugins: [remarkSectionize],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
        },
      ],
    ],
  },
  social: {
    github: 'https://github.com/xtenkay/ulti-strats',
    twitter: 'https://x.com/_Tenkay_'
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(projectRootDir, "src"),
      },
    },
  },
});


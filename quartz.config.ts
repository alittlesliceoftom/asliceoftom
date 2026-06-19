import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "asliceoftom",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "goatcounter",
      websiteId: "asliceoftom",
    },
    locale: "en-GB",
    baseUrl: "asliceoftom.com",
    ignorePatterns: ["private", "templates", ".obsidian", "drafts"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#e8e8e8",
          gray: "#b0b0b0",
          darkgray: "#3a3a3a",
          dark: "#1a1a1a",
          secondary: "#2a5a4a",
          tertiary: "#4a9a7a",
          highlight: "rgba(42, 90, 74, 0.08)",
          textHighlight: "#4a9a7a33",
        },
        darkMode: {
          light: "#1a1a1a",
          lightgray: "#2a2a2a",
          gray: "#666666",
          darkgray: "#d0d0d0",
          dark: "#e8e8e8",
          secondary: "#6aaa8a",
          tertiary: "#4a9a7a",
          highlight: "rgba(106, 170, 138, 0.10)",
          textHighlight: "#6aaa8a33",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config

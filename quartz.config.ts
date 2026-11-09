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
        header: "Bricolage Grotesque",
        body: "Bricolage Grotesque",
        code: "JetBrains Mono",
      },
      // Paper by default; dark mode is warm charcoal, never pure black.
      colors: {
        lightMode: {
          light: "#f1ece2", // paper (matches map-challenge-2026 palette)
          lightgray: "#ddd5c6",
          gray: "#a39a8b",
          darkgray: "#3a342e",
          dark: "#171412", // ink
          secondary: "#171412",
          tertiary: "#0077bb",
          highlight: "rgba(51, 187, 238, 0.14)",
          textHighlight: "#33bbee55",
        },
        darkMode: {
          light: "#24211d", // warm charcoal
          lightgray: "#36322c",
          gray: "#7d7468",
          darkgray: "#d6cfc2",
          dark: "#ece5d8", // cream
          secondary: "#ece5d8",
          tertiary: "#33bbee",
          highlight: "rgba(51, 187, 238, 0.12)",
          textHighlight: "#33bbee44",
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

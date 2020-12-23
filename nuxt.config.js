export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  // mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,500;0,700;1,500&family=IBM+Plex+Serif:ital,wght@0,500;0,700;1,500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "~/plugins/prism", mode: "client" },
    { src: "~/plugins/responsive.js", mode: "client" }
    // ""
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/markdownit",
    [
      "nuxt-image-extractor",
      {
        // (Required) CMS url
        baseUrl: "https://ethanprintz.dev/",

        // (Optional) Dir where downloaded images will be stored
        path: "/_images",

        // (Optional) Array containing image formats
        extensions: ["jpg", "jpeg", "gif", "png", "webp", "svg"]
      }
    ]
  ],
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    use: ["markdown-it-video"],
    injected: true,
    highlight: (code, lang) => {
      const Prism = require("prismjs");
      return Prism.highlight(
        code,
        Prism.languages[lang] || Prism.languages.markup
      );
    }
  },
  styleResources: {
    scss: ["~assets/scss/_colors.scss"]
  },
  strapi: {
    url: process.env.STRAPI_URL,
    entities: ["blogs"]
  },
  // image: {
  //   // Options
  // },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  publicRuntimeConfig: {
    STRAPI_URL: "https://ethanprintz.dev"
  }
};

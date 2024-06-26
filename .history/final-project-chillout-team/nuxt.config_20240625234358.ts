// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    "nuxt-icon",
    "nuxt-lodash",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "@nuxtjs/vuetify",
  ],
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY,
    },
  },
  app: {
    head: {
      title: "Shopping Website",
      meta: [
        {
          name: "description",
          content: "Shop the best products on ShoppingWebsite. Discover deals on electronics, fashion, home, and more.",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/logo.png" }],
      script: [{ src: "https://js.stripe.com/v3/", defer: true }],
    },
  },
  vuetify: {
    // Vuetify options
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
  },
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],

  devtools: { enabled: true },
});

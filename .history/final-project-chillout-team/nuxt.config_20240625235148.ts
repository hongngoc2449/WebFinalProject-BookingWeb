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
    "vuetify-nuxt-module",
  ],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      theme: {
        themes: {
          light: {
            primary: "#1976D2",
            secondary: "#424242",
            accent: "#82B1FF",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
          },
        },
      },
    },
  },
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

  devtools: { enabled: true },
});

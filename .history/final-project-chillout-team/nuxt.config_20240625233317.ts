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
  css: [
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
  ],
  plugins: [{ src: "~/plugins/primevue.js", ssr: false }],

  devtools: { enabled: true },
});

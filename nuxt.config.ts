// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/css/stylesheet.css", "~/assets/css/main.css"],
    modules: ["@nuxtjs/supabase", "@nuxt/image"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    image: {
      screens: {
        'smartphone': "375px",
        'tablet': '820px',
        'desktop': "1280px",
      },
    },
});

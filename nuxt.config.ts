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
    ssr: true,
});

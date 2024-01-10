// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/image"],
    devServer: {
        port: 3000,
        url: "http://192.168.1.10",
    },
});

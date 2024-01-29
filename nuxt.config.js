// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		authSecret: process.env.AUTH_SECRET,
	},

	modules: ["nuxt-mongoose", "@sidebase/nuxt-auth"],

	mongoose: {
		uri: process.env.MONGODB_URI,
		options: {},
		modelsDir: "models",
	},
	auth: {
		baseURL: process.env.NEXTAUTH_URL,
		provider: {
			type: "authjs",
		},
	},

	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});

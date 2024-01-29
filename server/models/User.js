import { defineMongooseModel } from "#nuxt/mongoose";
export const Investment = defineMongooseModel("Investment", {
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		trim: true,
	},
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

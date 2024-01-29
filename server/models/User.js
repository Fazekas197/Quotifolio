import { defineMongooseModel } from "#nuxt/mongoose";
export const User = defineMongooseModel("User", {
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
		lowercase: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
		length: 8,
	},
});

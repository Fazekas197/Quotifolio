import { NuxtAuthHandler } from "#auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "../../models/User";
import bcrypt from "bcrypt";

export default NuxtAuthHandler({
	secret: useRuntimeConfig().authSecret,

	pages: {
		signIn: "/auth/login",
	},

	providers: [
		CredentialsProvider.default({
			name: "credentials",
			credentials: {},
			async authorize(credentials) {
				// Fetch user
				const user = await User.findOne({ email: credentials.email });

				// check if pass matches
				const isValid = await bcrypt.compare(
					credentials.password,
					user.password
				);

				// handle is there is no user or the user is not valid
				if (!user || !isValid) {
					throw createError({
						statusCode: 401,
						statusMessage: "Unauthorized",
					});
				}

				return { ...user.toObject, password: undefined };
			},
		}),
	],

	session: {
		strategy: "jwt",
	},

	callbacks: {
		async jwt({ token, user, account }) {
			if (user) {
				token = {
					...token,
					...user,
				};
			}
			return token;
		},

		async session({ session, token }) {
			session.user = {
				...token,
				...session.user,
			};
			return session;
		},
	},
});

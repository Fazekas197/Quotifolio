import { User } from "../models/User";

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	await User.updateOne(
		{ _id: body.id },
		{ $push: { quotes: { quote: body.quote, author: body.author } } }
	);
});

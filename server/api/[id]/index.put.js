import { User } from "../../models/User";

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	await User.updateOne(
		{ _id: event.context.params.id },
		{ $push: { quotes: body } }
	);
});

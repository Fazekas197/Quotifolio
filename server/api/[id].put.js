import { User } from "../models/User";
export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	await User.updateOne(
		{ "quotes._id": event.context.params.id },
		{
			$set: {
				"quotes.$.quote": body.quote,
				"quotes.$.author": body.author,
			},
		}
	);
});

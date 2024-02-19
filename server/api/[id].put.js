import { User } from "../models/User";
import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const session = await getServerSession(event);
	if (!session) return { status: "unauthenticated!" };

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

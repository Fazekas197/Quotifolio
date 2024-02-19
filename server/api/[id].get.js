import { User } from "../models/User";
import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
	const session = await getServerSession(event);
	if (!session) return { status: "unauthenticated!" };

	const quote = await User.findById(session.user._id).select({
		quotes: { $elemMatch: { _id: event.context.params.id } },
	});
	return quote.quotes;
});

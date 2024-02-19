import { User } from "../models/User";
import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
	const session = await getServerSession(event);
	if (!session) return { status: "unauthenticated!" };

	const quotes = await User.findById(session.user._id).select("quotes");
	return quotes.quotes;
});

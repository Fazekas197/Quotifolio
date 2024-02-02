import { User } from "../../models/User";

export default defineEventHandler(async (event) => {
	const quotes = await User.findById(event.context.params.id).select(
		"quotes"
	);
	return quotes.quotes;
});

import { User } from "../models/User";
import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
	const session = await getServerSession(event);
	if (!session) return { status: "unauthenticated!" };

	await User.updateOne(
		{ _id: session.user._id },
		{
			$pull: {
				quotes: { _id: event.context.params.id },
			},
		}
	);
	return { msg: "deleted successfully" };
});

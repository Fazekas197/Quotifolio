import { User } from "../../models/User";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	if (!body.email || !body.username || !body.password) {
		return { msg: "Missing required fields" };
	}

	const salt = await bcrypt.genSalt(10);
	const hashedPass = await bcrypt.hash(body.password, salt);

	const user = await User.create({ ...body, password: hashedPass });
	return { ...user.toObject(), password: undefined };
});

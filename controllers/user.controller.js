import UserMessage from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;

		const filteredUsers = await UserMessage.find({ role: "doctor" });

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

{ role: "doctor" }
//	const filteredUsers = await UserMessage.find({ _id: { $ne: loggedInUserId } }).select("-password");
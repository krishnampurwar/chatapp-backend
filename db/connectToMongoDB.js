import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(`mongodb+srv://krishnampurwar:krishnam@cluster0.55t0h.mongodb.net/prescripto`);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;

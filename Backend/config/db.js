const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;

const connectDB = async () => {
    try {
        // First try connecting to Atlas
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000,
        });
        console.log("MongoDB Atlas Connected");
    } catch (atlasError) {
        console.warn("Could not connect to MongoDB Atlas:", atlasError.message);
        console.log("Starting local in-memory MongoDB server...");

        try {
            mongoServer = await MongoMemoryServer.create();
            const localUri = mongoServer.getUri();
            await mongoose.connect(localUri);
            console.log("MongoDB In-Memory Server Connected:", localUri);
            console.log("NOTE: Data will be lost when the server restarts. Fix your Atlas IP whitelist for persistent storage.");
        } catch (localError) {
            console.error("Failed to start in-memory MongoDB:", localError.message);
        }
    }
};

module.exports = connectDB;
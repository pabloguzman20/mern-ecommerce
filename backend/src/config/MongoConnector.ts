import 'dotenv/config';
import mongoose from 'mongoose';

const connectDatabase = async (): Promise<void> => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URI!);
        console.log("MongoDB connection SUCCESS");
    } catch (error) {
        console.log("MongoDB connection FAIL");
        process.exit(1);
    }
};

export { connectDatabase };
import mongoose from "mongoose";

const DBConnection = async () => {
    try {
        const connection = await mongoose.connect(
            process.env.DB_URI + process.env.DB_NAME
        );
        console.log("MongoDB connected: ", connection.connection.host);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export default DBConnection;

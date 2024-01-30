import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DBConnection from "./utils/DBConnection.js";
import Routes from "./routes/index.js";

const app = express();
app.use(express.json({ extended: true }));
app.use(cors());
dotenv.config();

app.use("/api", Routes);

const PORT = process.env.PORT || 5000;

(async () => {
    let server;
    try {
        await DBConnection();
        server = app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(
            "==================================================",
            error
        );
        server.close();
    }
})();

import dotenv from "dotenv";
dotenv.config();
import connectToDatabase from "./db.js";
import express from "express";
import cors from "cors";
import menuItemRoutes from "./routes/menuItemRoutes.js";

connectToDatabase();
const app = express();
const port = process.env.PORT || 5000; // Changed port to use environment variable

app.use(express.json());
app.use(cors());
app.use("/api/menuitems", menuItemRoutes);

app.get("/", (req, res) => {
    res.send("Api is running...");
});

app.listen(port, () => {
    console.log(`Server runs on port ${port}`);
});

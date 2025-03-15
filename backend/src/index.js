import express from 'express';
import dotnev from 'dotenv';
import cookieParser from "cookie-parser";

import authRoutes from './routes/auth.route.js';
import { connectDB } from './lib/db.js';
import messageRoutes from './routes/message.route.js'

dotnev.config();

const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})
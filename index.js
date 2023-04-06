import express from "express";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();


dotenv.config()
mongoose
    .connect(process.env.MONGO)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
    })

dotenv.config()
app.use(express.json());
app.use(cookieParser());

app.listen(process.env.PORT || 3002, '0.0.0.0', () => {
    console.log('Connected to backend http://localhost:3002')
})
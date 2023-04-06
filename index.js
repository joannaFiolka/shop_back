import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.listen(process.env.PORT || 3002, '0.0.0.0', () => {
    console.log('Connected to backend http://localhost:3002')
})
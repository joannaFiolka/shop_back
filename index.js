import express from "express";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import rateLimit from "express-rate-limit";
import {userRouter} from "./routes/user.router.js";
import {authRouter} from "./routes/auth.router.js";
import {productRouter} from "./routes/product.ruter.js";
import {orderRouter} from "./routes/order.router.js";
import {cartRouter} from "./routes/cart.router.js";

const app = express();

dotenv.config()
mongoose
    .connect(process.env.MONGO)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
    })

app.use(express.json());
app.use(cookieParser());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(cors({origin: 'http://localhost:3000',}));

app.use(rateLimit({
    windowMs: 5 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
}));

app.use('/users', userRouter)
app.use('/auth', authRouter)
app.use('/products', productRouter)
app.use('/carts', cartRouter)
app.use('/orders ', orderRouter)

app.listen(process.env.PORT || 3002, '0.0.0.0', () => {
    console.log('Connected to backend http://localhost:3002')
})
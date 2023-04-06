import {Router} from "express";
import {verifyAdmin, verifyToken} from "./verifyToken.js";

import {
    createOrder,
    deleteOrder,
    getAllOrders,
    getUserOrders,
    updateOrder
} from "../controllers/order.controller.js";


export const orderRouter = Router();

orderRouter
    .post('/', verifyToken, createOrder)
    .put('/:id', verifyAdmin, updateOrder)
    .delete('/:id', verifyAdmin, deleteOrder)
    .get('search/:userId', verifyAdmin, getUserOrders)
    .get('/', verifyAdmin, getAllOrders)
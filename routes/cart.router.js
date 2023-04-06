import {Router} from "express";
import {verifyAdmin, verifyToken, verifyTokenAndAuth} from "./verifyToken.js";
import {createCart, deleteCart, getCarts, getUserCart, updateCart} from "../controllers/cart.controller.js";


export const cartRouter = Router();
cartRouter
    .post('/', verifyToken, createCart)
    .put('/:id', verifyTokenAndAuth, updateCart)
    .delete('/:id', verifyTokenAndAuth, deleteCart)
    .get('search/:userId', verifyTokenAndAuth, getUserCart)
    .get('/', verifyAdmin, getCarts)
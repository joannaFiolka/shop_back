import {Router} from "express";
import {verifyTokenAndAuth} from "./verifyToken.js";
import {
    createProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct
} from "../controllers/products.controller.js";

export const productRouter = Router();

productRouter
    .post('/', verifyTokenAndAuth, createProduct)
    .put('/:id', verifyTokenAndAuth, updateProduct)
    .get('/find/:id', getProduct)
    .get('/:name?', getProducts)
    .delete('/:id', verifyTokenAndAuth, deleteProduct)
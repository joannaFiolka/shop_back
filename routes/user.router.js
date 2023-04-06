import {Router} from "express";

import {deleteUser, getUser, getUsers, updateUser} from "../controllers/user.controller.js";
import {verifyTokenAndAuth} from "./verifyToken.js";

export const userRouter = Router();

userRouter
    .put('/:id',verifyTokenAndAuth, updateUser)
    .delete('/:id',verifyTokenAndAuth, deleteUser)
    .get('search/:id',verifyTokenAndAuth, getUser)
    .get('/',verifyTokenAndAuth, getUsers)
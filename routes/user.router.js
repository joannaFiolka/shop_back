import {Router} from "express";

import {deleteUser, getUser, getUsers, updateUser} from "../controllers/user.controller.js";

export const userRouter = Router();

userRouter
    .put('/:id',updateUser)
    .delete('/:id', deleteUser)
    .get('search/:id', getUser)
    .get('/',getUsers)
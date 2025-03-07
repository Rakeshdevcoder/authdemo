import express from "express";
import { test, updateUser, deleteUser } from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const authRoutes = express.Router();

authRoutes.get("/", test);
authRoutes.post("/update/:id", verifyToken, updateUser);
authRoutes.delete("/delete/:id", verifyToken, deleteUser);

export default authRoutes;

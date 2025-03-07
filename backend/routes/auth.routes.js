import express from "express";
import { signin, signup, signout } from "../controller/auth.controller.js";

const userRoutes = express.Router();

userRoutes.post("/signup", signup);
userRoutes.post("/signin", signin);
userRoutes.get("/signout", signout);

export default userRoutes;

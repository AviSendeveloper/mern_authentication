import { Router } from "express";
import isAuth from "../middlewares/auth.middleware.js";
import {
    login,
    register,
    home,
} from "../controllers/AuthenticationController.js";

const Route = Router();

Route.post("/login", login);
Route.post("/register", register);
Route.get("/home", isAuth, home);

export default Route;

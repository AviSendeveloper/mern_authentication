import { Router } from "express";
import {
    login,
    register,
    home,
} from "../controllers/AuthenticationController.js";

const Route = Router();

Route.post("/login", login);
Route.post("/register", register);
Route.post("/home", home);

export default Route;

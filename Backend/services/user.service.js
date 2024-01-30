import User from "../models/User.js";
import { hashPassword } from "../utils/bcrypt.js";

export const checkUser = async (email) => {
    const user = await User.findOne({ email }).select("-__v");
    return user;
};

export const userDetails = async (id) => {
    const user = await User.findById(id);
    return user;
};

export const createUser = async ({ name, email, password, role = "user" }) => {
    const encryptedPassword = await hashPassword(password);
    const user = await User.create({
        name,
        email,
        password: encryptedPassword,
    });
    return user;
};

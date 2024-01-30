import { checkUser, createUser } from "../services/user.service.js";
import { checkPassword } from "../utils/bcrypt.js";
import { createToken } from "../utils/jwt.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const checkUserExist = await checkUser(email);
        if (!checkUserExist) throw new Error("user not found");

        // check password
        const isPasswordMatch = await checkPassword(
            password,
            checkUserExist.password
        );
        if (!isPasswordMatch) throw new Error("password not match");

        // create access token
        const token = await createToken(checkUserExist);

        return res.json({
            staus: true,
            accessToken: token,
            userDetails: checkUserExist,
            msg: "login successfully",
        });
    } catch (error) {
        return res.json({
            status: false,
            msg: `${error.message}`,
        });
    }
};

export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const checkUserExist = await checkUser(email);
        if (checkUserExist) throw new Error(`${email} is already exist`);

        // create user in database
        const newUser = await createUser({ name, email, password, role });

        // create token
        const token = await createToken(newUser);

        return res.json({
            status: true,
            accessToken: token,
            userDetails: newUser,
            msg: "register successfully",
        });
    } catch (error) {
        return res.json({
            status: false,
            msg: `${error.message}`,
        });
    }
};

export const home = async (req, res) => {
    return res.json({
        status: true,
    });
};

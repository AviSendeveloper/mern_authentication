import jwt from "jsonwebtoken";

export const createToken = async (user) => {
    return jwt.sign(
        { name: user.name, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_TOKEN_EXPIRE,
        }
    );
};

export const checkToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        console.log(error);
        return false;
    }
};

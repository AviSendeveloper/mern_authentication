import { checkToken } from "../utils/jwt.js";

const isAuth = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) throw new Error("Authorization token missing");

        const token = authorization.split(" ")[1];
        const tokenDecoded = await checkToken(token);
        if (!tokenDecoded) throw new Error("Unauthorize access");

        // add user in request
        req.user = tokenDecoded;

        next();
    } catch (error) {
        return res.json({
            status: false,
            msg: `${error.message}`,
        });
    }
};

export default isAuth;

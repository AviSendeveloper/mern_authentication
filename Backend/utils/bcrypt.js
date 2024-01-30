import { hash, compare } from "bcrypt";

const SALT = 10;

export const hashPassword = async (password) => {
    return await hash(password, SALT);
};

export const checkPassword = async (password, hashPassword) => {
    return await compare(password, hashPassword);
};

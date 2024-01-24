export const login = async (req, res) => {
    const { email, password } = req.body;

    return res.json({
        staus: true,
        msg: "login successfully",
    });
};

export const register = async (req, res) => {
    return res.json({
        status: true,
        msg: "register successfully",
    });
};

export const home = async (req, res) => {
    return res.json({
        status: true,
    });
};

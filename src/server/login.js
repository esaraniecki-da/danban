const login = (req, res, next) => {
    if (req.user) {
        req.initialState = { ...req.initialState, user: req.user };
        next();
    } else {
        next();
    }
};

export default login;
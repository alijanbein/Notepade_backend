const jwt = require("jsonwebtoken");
const HttpError = require("../utils/http-error");
exports.authMiddleware = async(req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]
    if(!token){
        const error = new HttpError("your are not authorized",405);
        return next(error);
    }
    try {
        const user = jwt.verify(token,process.env.SECRET);
        req["user"] = user.userExist
        next()
    } catch (error) {
        
    }
}
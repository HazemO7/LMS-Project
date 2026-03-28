const jwt = require("jsonwebtoken");


// Middleware to verify JWT token and check if user is admin
const authMidleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                msg: "No token provided"
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
// Attach user information into request object
        req.user = decoded;

        // check admin or not
        if (req.user.role !== "admin") {
            return res.status(403).json({
                msg: "Access denied, admins only"
            });
        }

        next();

    } catch (error) {
        return res.status(401).json({
            msg: "Invalid token",
            error: error.message
        });
    }
};


module.exports = authMidleware;

const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const authHeaders = req.headers['authorization'];

    // Check if header exists
    if (!authHeaders) {
        return res.status(401).json({ message: "Auth failed. No token provided" });
    }

    // Format: "Bearer TOKEN"
    const token = authHeaders.split(' ')[1];

    // Check token
    if (!token) {
        return res.status(401).json({ message: "Auth failed. Invalid token" });
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET || "secret123"
        );

        req.user = decoded; // attach user data
        next(); // go to next middleware/controller
    } catch (error) {
        return res.status(401).json({ message: "Auth failed. Invalid token" });
    }
};
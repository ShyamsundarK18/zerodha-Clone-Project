
// backend/middleware/authMiddleware.js

const jwt = require("jsonwebtoken");

//require("dotenv").config();

const JWT_SECRET = process.env.SECRETE_KEY;

const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    // console.log("Incoming Authorization header:", authHeader); // DEBUG

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        console.log(" No Bearer token found");
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1];
    // console.log("Extracted Token:", token); // DEBUG

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        // console.log("Token decoded:", decoded); // DEBUG
        req.user = decoded;
        next();
    } catch (err) {
        //console.error("JWT Verification Error:", err.message); // DEBUG
        return res.status(403).json({ message: "Invalid token." });
    }
};

module.exports = authenticateToken;







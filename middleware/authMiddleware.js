const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    let token = null;

    // 🔹 Try Authorization header
    if (req.headers.authorization) {
      token = req.headers.authorization;
    }

    // 🔹 Try x-access-token (backup)
    if (!token && req.headers["x-access-token"]) {
      token = req.headers["x-access-token"];
    }

    // 🔹 If still no token
    if (!token) {
      return res.status(401).json({
        message: "No token provided"
      });
    }

    // 🔹 Handle Bearer or raw token
    if (token.startsWith("Bearer ")) {
      token = token.slice(7);
    }

    // 🔹 FINAL FIX: trim spaces (VERY IMPORTANT)
    token = token.trim();

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.id;

    next();

  } catch (error) {
    console.log("AUTH ERROR:", error.message);

    return res.status(401).json({
      message: "Invalid token"
    });
  }
};

module.exports = authMiddleware;
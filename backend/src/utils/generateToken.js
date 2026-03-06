const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    return jwt.sign({
            id: user._id,
            role: user.role,
            organization_id: user.organization_id
        },
        process.env.JWT_SECRET, {
            expiresIn: "7d"
        }
    );
};

module.exports = generateToken;
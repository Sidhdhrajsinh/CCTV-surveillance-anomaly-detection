const User = require("../models/users");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

exports.signup = async(req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password_hash: hashedPassword,
        });

        const token = generateToken(user);

        res.status(201).json({
            message: "User created successfully",
            token,
            user
        });

    } catch (error) {
        res.status(500).json({
            message: "Signup failed",
            error: error.message
        });
    }
};


exports.login = async(req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password_hash);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        const token = generateToken(user);

        res.json({
            message: "Login successful",
            token,
            user
        });

    } catch (error) {

        res.status(500).json({
            message: "Login failed",
            error: error.message
        });

    }
};
// backend/controllers/authController.js
const User = require("../model/UserModel");
const { FundsModel } = require("../model/FundsModel");

const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../auth/tokenUtils");

exports.signup = async (req, res) => {
    const { email, username, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const newUser = new User({ email, username, password });
        await newUser.save();
        const openingBalance = Math.floor(Math.random() * 5000 + 5000); // ₹5,000–₹10,000

        await FundsModel.create({
            userId: newUser._id,
            marginAvailable: openingBalance,
            marginUsed: 0,
            openingBalance,
            transactions: [
                {
                    type: "add",
                    amount: openingBalance,
                    timestamp: new Date(),
                },
            ],
        });

        const token = createSecretToken(newUser._id);
        res.status(201).json({ token, user: { id: newUser._id, email: newUser.email, username: newUser.username } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = createSecretToken(user._id);
        res.status(200).json({ token, user: { id: user._id, email: user.email, username: user.username } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

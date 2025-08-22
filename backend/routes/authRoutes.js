
// backend/routes/authRoutes.js
const express = require("express");
const { signup, login } = require("../controllers/authController");
const authenticateToken = require("../middleware/authMiddleware");
const User = require("../model/UserModel");
const { HoldingsModel } = require("../model/HoldingsModel.js");
const { StocksModel } = require("../model/StocksModel.js");
const { FundsModel } = require("../model/FundsModel.js")




const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);


// Public route to get all stocks
router.get("/stocks", authenticateToken, async (req, res) => {
    try {
        const stocks = await StocksModel.find({});
        res.json(stocks);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch stocks" });
    }
});



router.get("/verify", authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("username email");
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, username: user.username });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});



//  route for summary
router.get("/summary", authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("username");

        const holdings = await HoldingsModel.find({ userId });
        const fund = await FundsModel.findOne({ userId });


        const investment = holdings.reduce((sum, h) => sum + h.avg * h.qty, 0);
        const currentValue = holdings.reduce((sum, h) => sum + h.price * h.qty, 0);
        const pnlValue = currentValue - investment;
        const pnlPercent = investment > 0 ? ((pnlValue / investment) * 100).toFixed(2) : "0.00";

        res.json({
            username: user.username,
            equity: fund
                ? {
                    marginAvailable: fund.marginAvailable,
                    marginUsed: fund.marginUsed,
                    openingBalance: fund.openingBalance,
                }
                : {
                    marginAvailable: 0,
                    marginUsed: 0,
                    openingBalance: 0,
                },
            holdings: {
                count: holdings.length,
                pnl: {
                    value: pnlValue.toFixed(2),
                    percent: pnlPercent,
                },
                currentValue: currentValue.toFixed(2),
                investment: investment.toFixed(2),
            },
        });

    } catch (err) {
        console.error("Error in /summary:", err);
        res.status(500).json({ message: "Server error" });
    }
});



//Funds
router.get("/funds", authenticateToken, async (req, res) => {
    try {
        const fund = await FundsModel.findOne({ userId: req.user.id });
        if (!fund) return res.status(404).json({ error: "No fund record found" });

        res.json({
            equity: {
                marginAvailable: fund.marginAvailable,
                marginUsed: fund.marginUsed,
                openingBalance: fund.openingBalance,
            },

        });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});


// Add funds
router.post("/funds/add", authenticateToken, async (req, res) => {
    const { amount } = req.body;
    const userId = req.user.id;

    if (!amount || amount <= 0) {
        return res.status(400).json({ error: "Invalid amount" });
    }

    let fund = await FundsModel.findOne({ userId });
    if (!fund) {
        fund = new FundsModel({ userId });
    }

    fund.marginAvailable += amount;
    fund.openingBalance += amount;
    fund.transactions.push({ type: "add", amount });

    await fund.save();
    res.json({ equity: fund });
});

// Withdraw funds
router.post("/funds/withdraw", authenticateToken, async (req, res) => {
    const { amount } = req.body;
    const userId = req.user.id;

    if (!amount || amount <= 0) {
        return res.status(400).json({ error: "Invalid amount" });
    }

    const fund = await FundsModel.findOne({ userId });
    if (!fund || fund.marginAvailable < amount) {
        return res.status(400).json({ error: "Insufficient margin" });
    }

    fund.marginAvailable -= amount;
    fund.openingBalance -= amount;
    fund.transactions.push({ type: "withdraw", amount });

    await fund.save();
    res.json({ equity: fund });
});


router.get("/transactions", authenticateToken, async (req, res) => {
    try {
        const fund = await FundsModel.findOne({ userId: req.user.id });
        if (!fund) return res.status(404).json({ error: "No fund record found" });

        res.json({ transactions: fund.transactions });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});


module.exports = router;

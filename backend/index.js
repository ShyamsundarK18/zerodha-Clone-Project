//backend/index.js
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const authenticateToken = require("./middleware/authMiddleware");

const { HoldingsModel } = require("./model/HoldingsModel.js");
const { PositionsModel } = require("./model/PositionsModel.js");
const { OrdersModel } = require("./model/OrdersModel.js");
const { FundsModel } = require("./model/FundsModel.js");

const PORT = process.env.PORT || 3002;

const MONGO_LINK = process.env.MONGO_URL;



const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);



//Get Holding Data Route
app.get("/allHoldings", authenticateToken, async (req, res) => {

    try {
        const userId = req.user.id; // Assuming your token middleware sets req.user
        const holdings = await HoldingsModel.find({ userId });
        res.json(holdings);
    } catch (err) {
        console.error("Error fetching holdings:", err);
        res.status(500).send("Server error");
    }

});


//Get Position Data Route
app.get("/allPositions", authenticateToken, async (req, res) => {

    try {
        const userId = req.user.id;
        const allPosition = await PositionsModel.find({ userId });
        res.json(allPosition);
    } catch (err) {
        console.error("Error fetching holdings:", err);
        res.status(500).send("Server error");
    }

});




// GET All Orders route
app.get("/allOrders", authenticateToken, async (req, res) => {

    try {
        const userId = req.user.id;
        const allOrders = await OrdersModel.find({ userId });
        res.json(allOrders);
    } catch (err) {
        console.error("Error fetching holdings:", err);
        res.status(500).send("Server error");
    }

});



//NewOrder (Buy and Sell) route
app.post("/newOrder", authenticateToken, async (req, res) => {
    try {
        const { name, qty, price, mode } = req.body;
        const quantity = parseInt(qty);
        const priceNum = parseFloat(price);

        let position = await PositionsModel.findOne({ name, userId: req.user.id });

        // Save the order with userId
        const newOrder = new OrdersModel({
            userId: req.user.id,  // 
            name,
            qty: quantity,
            price: priceNum,
            mode,
        });
        await newOrder.save();

        // Update holdings based on BUY or SELL
        let holding = await HoldingsModel.findOne({ name, userId: req.user.id });

        if (mode === "BUY") {

            const totalCost = priceNum * quantity;

            // Fetch user's fund
            const fund = await FundsModel.findOne({ userId: req.user.id });

            if (!fund || fund.marginAvailable < totalCost) {
                return res.status(400).json({ message: "Insufficient funds" });
            }

            // Deduct from available margin and add to used margin
            fund.marginAvailable -= totalCost;
            fund.marginUsed += totalCost;
            await fund.save();

            // === Generate shared simulated values ===
            const randomNet = (Math.random() * 4 - 2).toFixed(2); // -2% to +2%
            const net = `${randomNet > 0 ? "+" : ""}${randomNet}%`;

            const adjustedPrice = priceNum * (1 + parseFloat(randomNet) / 100);

            const randomDay = (Math.random() * 2 - 1).toFixed(2); // -1% to +1%
            const day = `${randomDay > 0 ? "+" : ""}${randomDay}%`;


            if (holding) {
                const totalCost = (holding.avg * holding.qty) + (priceNum * quantity);
                const newQty = holding.qty + quantity;
                const newAvg = totalCost / newQty;

                holding.qty = newQty;
                holding.avg = newAvg;
                holding.price = adjustedPrice;
                holding.net = net;
                holding.day = day;
                holding.isLoss = adjustedPrice < newAvg;
                await holding.save();
            } else {
                const newHolding = new HoldingsModel({
                    userId: req.user.id,
                    name,
                    qty: quantity,
                    avg: priceNum,
                    price: adjustedPrice,
                    net,
                    day,
                    isLoss: adjustedPrice < priceNum,
                });
                await newHolding.save();
                holding = newHolding;
            }

            // === Always Update or Create Position ===
            if (position) {
                const totalCost = (position.avg * position.qty) + (priceNum * quantity);
                const newQty = position.qty + quantity;
                const newAvg = totalCost / newQty;
                const netPercent = (((priceNum - newAvg) / newAvg) * 100).toFixed(2);
                const net = `${netPercent > 0 ? "+" : ""}${netPercent}%`;

                position.qty = newQty;
                position.avg = newAvg;
                position.price = priceNum;
                position.product = mode;
                position.net = net;
                position.day = day;
                position.isLoss = adjustedPrice < newAvg;

                await position.save();
            } else {
                const newPosition = new PositionsModel({
                    userId: req.user.id,
                    name,
                    qty: quantity,
                    avg: priceNum,
                    price: adjustedPrice,
                    product: mode,
                    net,
                    day,
                    isLoss: adjustedPrice < priceNum,
                });
                await newPosition.save();
                position = newPosition;
            }

        } else if (mode === "SELL") {

            const totalCredit = priceNum * quantity;

            const fund = await FundsModel.findOne({ userId: req.user.id });

            if (fund) {
                fund.marginAvailable += totalCredit;
                fund.marginUsed = Math.max(fund.marginUsed - totalCredit, 0); // prevent negative
                await fund.save();
            }


            if (!holding) {
                return res.status(400).json({ message: "Holding not found for sell." });
            }
            if (holding.qty < quantity) {
                return res.status(400).json({ message: "Not enough Stock quantity to sell." });
            }

            holding.qty -= quantity;

            if (holding.qty <= 0) {
                await HoldingsModel.deleteOne({ name, userId: req.user.id });
                holding = null;
            } else {
                await holding.save();
            }

            // After updating or deleting holding Update position
            let position = await PositionsModel.findOne({ name, userId: req.user.id });

            if (!position) {
                console.warn("Position not found during SELL — skipping position update.");
            } else {
                position.qty -= quantity;

                if (position.qty <= 0) {
                    await PositionsModel.deleteOne({ name, userId: req.user.id });
                    position = null;
                } else {

                    //  Recalculate metrics
                    const netPercent = (((position.price - position.avg) / position.avg) * 100).toFixed(2);
                    const net = `${netPercent > 0 ? "+" : ""}${netPercent}%`;

                    const dayChange = (Math.random() * 2 - 1).toFixed(2);
                    const day = `${dayChange > 0 ? "+" : ""}${dayChange}%`;

                    position.net = net;
                    position.day = day;
                    position.isLoss = position.price < position.avg;

                    await position.save();
                }
            }

        }

        return res.status(201).json({ order: newOrder, holding, position });
    } catch (err) {
        console.error("Error in /newOrder:", err);
        res.status(500).json({ message: "Server error" });
    }
});


app.listen(PORT, () => {
    console.log("app is running at port 3002 !");
    mongoose.connect(MONGO_LINK);
    console.log("DB connected !");
});




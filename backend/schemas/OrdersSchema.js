const { Schema } = require("mongoose");


const OrdersSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: String,
    qty: Number,
    price: Number,
    mode: String,

}, { timestamps: true }
);

module.exports = { OrdersSchema };
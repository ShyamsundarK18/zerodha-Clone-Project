const { Schema } = require("mongoose");

const StocksSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true, // Prevent duplicate entries like multiple "INFY"
    },
    price: {
        type: Number,
        required: true,
    },
    percent: {
        type: String,
        required: true,
    },
    isDown: {
        type: Boolean,
        required: true,
    },

});

module.exports = { StocksSchema };
const { model } = require("mongoose");


const { StocksSchema } = require("../schemas/StocksSchema.js");

const StocksModel = model("Stock", StocksSchema);

module.exports = { StocksModel };
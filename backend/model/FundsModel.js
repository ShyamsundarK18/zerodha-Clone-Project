const { model } = require("mongoose");

const { FundsSchema } = require("../schemas/FundsSchema");

const FundsModel = model("fund", FundsSchema);

module.exports = { FundsModel };
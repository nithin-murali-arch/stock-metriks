var mongoose_1 = require("mongoose");
var holdingsSchema = new mongoose_1.Schema({
    scripname: String,
    qty: Number,
    avgprice: Number
});
var dematSchema = new mongoose_1.Schema({
    userId: String,
    cookie: String,
    holdings: [holdingsSchema],
    broker: String
});
exports.userSchema = new mongoose_1.Schema({
    createdTime: Date,
    lastUpdatedTime: Date,
    email: { type: String, unique: true },
    password: String,
    demat: [dematSchema]
});
exports.userSchema.pre("save", function (next) {
    if (!this.createdTime) {
        this.createdTime = new Date();
    }
    this.lastUpdatedTime = new Date();
    next();
});

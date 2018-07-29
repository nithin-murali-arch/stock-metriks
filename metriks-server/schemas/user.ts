import { Schema } from "mongoose";

var holdingsSchema: Schema = new Schema({
    scripname: String,
    qty: Number,
    avgprice: Number
});

var dematSchema: Schema = new Schema({
    userId: String,
    cookie: String,
    holdings: [holdingsSchema],
    broker: String
});

export var userSchema: Schema = new Schema({
    createdTime: Date,
    lastUpdatedTime: Date,
    email: String,
    password: String,
    demat: [dematSchema]
  });

  userSchema.pre("save", function(next) {
    if (!this.createdTime) {
      this.createdTime = new Date();
    }
    this.lastUpdatedTime = new Date();
    next();
  });
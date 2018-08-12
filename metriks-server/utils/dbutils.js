var mongoose = require("mongoose");
//schemas
var user_1 = require("../schemas/user"); //import userSchema
// import { resolve } from "path";
var config = require('../config/config');
var MongooseConnection = (function () {
    function MongooseConnection() {
        this.connection = mongoose.createConnection(config.mongodb.connectionString);
        this.User = this.connection.model("User", user_1.userSchema);
    }
    MongooseConnection.prototype.createUser = function (username, password) {
        var _this = this;
        var user = {
            emailid: username,
            password: password
        };
        return new Promise(function (resolve, reject) {
            new _this.User(user).save(function (err, result) {
                if (err) {
                    if (err.name === 'MongoError' && err.code === 11000) {
                        reject({ message: 'User already exists!', err: err });
                    }
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    MongooseConnection.prototype.loginUser = function (username, password) {
        var _this = this;
        var queryObj = {
            emailid: username
        };
        if (password) {
            queryObj.password = password;
        }
        return new Promise(function (resolve, reject) {
            _this.User.findOne(queryObj, function (err, user) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(user);
                }
            });
        });
    };
    MongooseConnection.prototype.fetchUserInfo = function (username) {
        return this.loginUser(username, '');
    };
    return MongooseConnection;
})();
exports["default"] = MongooseConnection;

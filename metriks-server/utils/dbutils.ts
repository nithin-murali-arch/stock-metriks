import mongoose = require("mongoose");
//interfaces
import { IUser } from "../interfaces/user"; //import IUser
//models
// import { IModel } from "../models/model"; //import IModel
import { IUserModel } from "../models/user"; //import IUserModel
//schemas
import { userSchema } from "../schemas/user"; //import userSchema
// import { resolve } from "path";

const config = require('../config/config');

export default class MongooseConnection{
    connection: mongoose.Connection = mongoose.createConnection(config.mongodb.connectionString);
    User = this.connection.model<IUserModel>("User", userSchema);

    constructor(){
    }

    createUser(username:string, password:string){
        let user: IUser = {
            emailid: username,
            password: password
        };
        return new Promise((resolve, reject) => {
            new this.User(user).save(function(err: any, result:IUserModel){
                if (err) {
                    if (err.name === 'MongoError' && err.code === 11000) {
                        reject({message: 'User already exists!', err});
                    }
                    reject(err);
                }
                else{
                    resolve(result);
                }
            });
        });
    }

    loginUser(username:string, password: string){
        let queryObj:any = {
            emailid: username
        };
        if(password){
            queryObj.password = password;
        }
        return new Promise((resolve, reject) => {
            this.User.findOne(queryObj, function(err:any, user:IUserModel){
                if(err){
                    reject(err)
                }
                else{
                    resolve(user);
                }
            });
        });
    }

    fetchUserInfo(username:string){
        return this.loginUser(username, '');
    }


}
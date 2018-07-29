import { Router, Request, Response } from 'express';
import mongoose = require("mongoose");
//interfaces
import { IUser } from "../interfaces/user"; //import IUser
//models
import { IModel } from "../models/model"; //import IModel
import { IUserModel } from "../models/user"; //import IUserModel
//schemas
import { userSchema } from "../schemas/user"; //import userSchema

let connection: mongoose.Connection = mongoose.createConnection(MONGODB_CONNECTION);




const router: Router = Router();



router.get('/checkuser/:id', function(request: Request, response: Response){

});

router.post('/', function(request: Request, response: Response){

});

export default router;
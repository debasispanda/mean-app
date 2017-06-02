//import express = require('express');
import { express } from 'express';
import { User } from '../models/user';
import { UserBusiness } from '../business/user.business';

export class UserController{
    retrieve(req: express.Request, res: express.Response): void {
        //let result: User[] = [{name: 'abc', age: 40}, {name: 'xyz', age: 50}];
        try {

            var userBusiness = new UserBusiness();
            userBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
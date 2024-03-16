import { Request,Response } from "express";
import { UserModel } from "../model/usersModel";
import { userRouter } from "../router/userRouter"

abstract class UserController{
    static getAllUsers = (req:Request,res:Response) =>{
        const user = UserModel.getAllUsers();
        console.log(user);
        res.json(user)
    }

    static registerUser = (req: Request, res: Response) => {
          const { username, password, email } = req.body;
          const response = UserModel.registerUser({ username, password, email })
          res.status(response).json({ username, email });
        }

}
export {UserController}
import users from "../database/users.json";
import { randomUUID } from "node:crypto";
import { writeFileSync } from "jsonfile";

abstract class UserModel{
    static getAllUsers = () => {
        return users;
      };
      static registerUser = (objUser:any) => {
        const { username, password, email} = objUser;

        users.push({username, password, email, token: "" });
    
        writeFileSync("./src/database/users.json", users);

        return 200
      }
}

export {UserModel}
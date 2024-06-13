import Container, { Service } from "typedi";
import { v4 as uuidV4 } from "uuid";
import { Request, Response } from "express";
import { BusinessError, DatabaseError } from "../../../config/exceptions";
import { UserLogic } from "../logics/userLogic";
import { Bcrypt } from "../services/bcrypt";
import { User } from "../../database/entities";

@Service()
export class UserController {
    private userLogic: UserLogic;

    constructor() {
        this.userLogic = Container.get(UserLogic);
    }

    public store = async (req: Request, res: Response) => {
        const { name, phone, password, email } = req.body;

        const response = await this.userLogic.createUser({
            name,
            email,
            password,
            phone,
        });
        return res.status(200).json(response);
    };

    public selectAll = async (req: Request, res: Response) => {
        const response = await this.userLogic.selectAll();

        return res.status(200).json(response);
    };
}

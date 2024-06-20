import Container, { Service } from "typedi";
import { Request, Response } from "express";
import { UserLogic } from "../logics/userLogic";

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

    public selectById = async (req: Request, res: Response) => {
        const { id } = req.params;

        const response = await this.userLogic.selectById(id);

        return res.status(200).json(response);
    };

    public update = async (req: Request, res: Response) => {
        const { id, name, phone, password, email } = req.body;

        const response = await this.userLogic.update(id, {
            name,
            phone,
            password,
            email,
        });
        return res.status(201).json(response);
    };
}

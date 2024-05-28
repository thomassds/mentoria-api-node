import { Request, Response } from "express";
import { Service } from "typedi";

@Service()
export class UserController {
    public store = async (req: Request, res: Response) => {
        return res.status(200).json("Olá Mundo");
    };
}

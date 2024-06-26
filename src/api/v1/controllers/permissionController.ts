import { Request, Response } from "express";
import Container, { Service } from "typedi";
import { PermissionLogic } from "../logics";

@Service()
export class PermissionController {
    private readonly permissionLogic: PermissionLogic;

    constructor() {
        this.permissionLogic = Container.get(PermissionLogic);
    }

    public store = async (req: Request, res: Response) => {
        const { description, key } = req.body;

        const response = await this.permissionLogic.store({ description, key });

        return res.status(200).json(response);
    };

    public selectAll = async (req: Request, res: Response) => {
        const response = await this.permissionLogic.selectAll();

        return res.status(200).json(response);
    };

    public selectById = async (req: Request, res: Response) => {
        const { id } = req.params;

        const response = await this.permissionLogic.selectById(id);

        return res.status(200).json(response);
    };

    public update = async (req: Request, res: Response) => {
        const { id, description, key } = req.body;

        const response = await this.permissionLogic.update({
            id,
            description,
            key,
        });

        return res.status(201).json(response);
    };
}

import { Request, Response } from "express";
import Container, { Service } from "typedi";
import { CustomerLogic } from "../logics/customerLogic";

@Service()
export class CustomerController {
    private readonly customerLogic: CustomerLogic;

    constructor() {
        this.customerLogic = Container.get(CustomerLogic);
    }

    public store = async (req: Request, res: Response) => {
        const { name, taxIdentifier, phone, email} = req.body;

        const response = await this.customerLogic.store(name, taxIdentifier, phone, email);

        return res.status(201).json(response);
    };

    public selectAll = async (req: Request, res: Response) => {
        const response = await this.customerLogic.selectAll()

        return res.status(200).json(response)
    }

    public selectById = async(req: Request, res: Response) => {
        const { id } = req.params

        const response = await this.customerLogic.selectById(id)

        return res.status(200).json(response)
    }

    public update = async (req: Request, res: Response) => {
        const { id, name, taxIdentifier, phone, email } = req.body

        const response = await this.customerLogic.update({
            id,
            name,
            taxIdentifier,
            phone,
            email,
        })

        return res.status(201).json(response)
    }
}

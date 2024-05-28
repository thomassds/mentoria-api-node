import Container, { Service } from "typedi";

import { v4 as uuidV4 } from "uuid";

import { Request, Response, Router } from "express";

import { User } from "../../database/entities";
import { BusinessError, DatabaseError } from "../../../config/exceptions";
import { Repository, getRepository } from "typeorm";
import { Bcrypt } from "../services/bcrypt";

@Service()
export class UserController {
    private readonly userRepository: Repository<User>;
    private bcrypt: Bcrypt;

    constructor() {
        this.userRepository = getRepository(User);
        this.bcrypt = Container.get(Bcrypt);
    }

    public store = async (req: Request, res: Response) => {
        const { name, phone, password, email } = req.body;

        if (!name) throw new BusinessError("Name is obrigatory on User", 404);
        if (!email) throw new BusinessError("Email is obrigatory on User", 404);
        if (!phone) throw new BusinessError("Phone is obrigatory on User", 404);
        if (!password)
            throw new BusinessError("Password is obrigatory on User", 404);

        const passwordHash = await this.bcrypt.generateHash(password);

        try {
            const response = await this.userRepository.save({
                id: uuidV4(),
                name,
                email,
                password: passwordHash,
                phone,
            });
            return res.status(200).json(response);
        } catch (error) {
            throw new DatabaseError("Cannot create User");
        }
    };
}

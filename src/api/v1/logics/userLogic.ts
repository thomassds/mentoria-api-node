import Container, { Service } from "typedi";
import { UserRepository } from "../repositories/userRepository";
import { User } from "../../database/entities/user";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { Bcrypt } from "../services/bcrypt";

@Service()
export class UserLogic {
    private bcrypt: Bcrypt;
    private userRepository: UserRepository;

    constructor() {
        this.bcrypt = Container.get(Bcrypt);
        this.userRepository = Container.get(UserRepository);
    }

    async createUser(data: User): Promise<User> {
        const passwordHash = await this.bcrypt.generateHash(data.password);

        return await this.userRepository.store({
            ...data,
            password: passwordHash,
        });
    }

    async selectAll(): Promise<User[]> {
        return await this.userRepository.selectAll();
    }
}

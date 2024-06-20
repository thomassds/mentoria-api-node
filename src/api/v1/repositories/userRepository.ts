import { EntityRepository, Repository, getRepository } from "typeorm";
import { User } from "../../database/entities/user";
import { Service } from "typedi";
import { userRepositoryInterface } from "./interfaces/userRepositoryInterface"; // Ajuste o caminho conforme necessário
import { DatabaseError } from "../../../config/exceptions";
import { UserInterface } from "../interfaces";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

@Service()
@EntityRepository(User)
export class UserRepository implements userRepositoryInterface {
    private readonly repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async store(data: User): Promise<User> {
        try {
            return await this.repository.save(data);
        } catch (error) {
            console.log(error);
            throw new DatabaseError("Cannot store User");
        }
    }

    async selectAll(): Promise<User[]> {
        try {
            return await this.repository.find();
        } catch (error) {
            throw new DatabaseError("Cannot get Users");
        }
    }

    async selectById(id: string): Promise<User | undefined> {
        try {
            const response = await this.repository.findOne(id);
            return response;
        } catch (error: any) {
            throw new DatabaseError("Fail to get this permission", error);
        }
    }
    async update(
        id: string,
        data: QueryDeepPartialEntity<User>
    ): Promise<void> {
        try {
            await this.repository.update({ id }, data);

            return;
        } catch (error: any) {
            throw new DatabaseError("Fail to update this permission", error);
        }
    }
}

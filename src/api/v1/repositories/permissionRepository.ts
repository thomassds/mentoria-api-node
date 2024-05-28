import { EntityRepository, Repository, getRepository } from "typeorm";
import { Permission } from "../../database/entities/permission";
import { Service } from "typedi";
import { PermissionRepositoryInterface } from "./interfaces";
import { DatabaseError } from "../../../config/exceptions";

@Service()
@EntityRepository(Permission)
export class PermissionRepository implements PermissionRepositoryInterface {
    private readonly repository: Repository<Permission>;

    constructor() {
        this.repository = getRepository(Permission);
    }

    async store(description: string, key: string): Promise<Permission> {
        try {
            const response = await this.repository.save({
                key,
                description,
            });

            return response;
        } catch (error: any) {
            throw new DatabaseError("Failed to save this permission.", error);
        }
    }
}

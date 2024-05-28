import { EntityRepository, Repository, getRepository } from "typeorm";
import { Permission } from "../../database/entities/permission";
import { Service } from "typedi";
import { PermissionRepositoryInterface } from "./interfaces";
import { DatabaseError } from "../../../config/exceptions";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

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
            throw new DatabaseError("Fail to save this permission.", error);
        }
    }

    async update(
        id: string,
        data: QueryDeepPartialEntity<Permission>
    ): Promise<void> {
        try {
            await this.repository.update({ id }, data);
        } catch (error: any) {
            throw new DatabaseError("Fail to update this permission.", error);
        }
    }

    async selectById(id: string): Promise<Permission> {
        try {
            return await this.repository.findOneOrFail(id);
        } catch (error: any) {
            throw new DatabaseError(
                `Fail to get this permission. ${id}`,
                error
            );
        }
    }

    async selectAll(): Promise<Permission[]> {
        try {
            return await this.repository.find();
        } catch (error: any) {
            throw new DatabaseError("Fail to get this permissions.", error);
        }
    }
}

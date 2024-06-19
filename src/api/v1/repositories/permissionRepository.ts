import { EntityRepository, Repository, getRepository } from "typeorm";
import { Permission } from "../../database/entities";
import { PermissionRepositoryInterface } from "./interfaces/permissionRepositoryInterface";
import { DatabaseError } from "../../../config/exceptions";
import { Service } from "typedi";
import { PermissionInterface } from "../interfaces";

@Service()
@EntityRepository(Permission)
export class PermissionRepository implements PermissionRepositoryInterface {
    private readonly repository: Repository<Permission>;

    constructor() {
        this.repository = getRepository(Permission);
    }

    async store({
        description,
        key,
    }: PermissionInterface): Promise<Permission> {
        try {
            const response = await this.repository.save({ description, key });

            return response;
        } catch (error: any) {
            throw new DatabaseError("Fail to register this permission", error);
        }
    }

    async selectAll(): Promise<Permission[]> {
        try {
            const response = await this.repository.find();

            return response;
        } catch (error: any) {
            throw new DatabaseError("Fail to get all permissions", error);
        }
    }

    async selectById(id: string): Promise<Permission | void> {
        try {
            const response = await this.repository.findOne(id);

            return response;
        } catch (error: any) {
            throw new DatabaseError("Fail to get this permission", error);
        }
    }

    async update({ id, description, key }: PermissionInterface): Promise<void> {
        try {
            await this.repository.update({ id }, { description, key });

            return;
        } catch (error: any) {
            throw new DatabaseError("Fail to update this permission", error);
        }
    }
}

import { Permission } from "../../../database/entities";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { PermissionInterface } from "../../interfaces";

export interface PermissionRepositoryInterface {
    store({ description, key }: PermissionInterface): Promise<Permission>;
    selectAll(): Promise<Permission[]>;
    selectById(id: string): Promise<Permission | void>;
    update({ id, description, key }: PermissionInterface): Promise<void>;
}

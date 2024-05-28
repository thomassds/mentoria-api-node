import { Permission } from "../../../database/entities";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export interface PermissionRepositoryInterface {
    store(description: string, key: string): Promise<Permission>;
    update(id: string, data: QueryDeepPartialEntity<Permission>): Promise<void>;
    selectById(id: string): Promise<Permission>;
    selectAll(): Promise<Permission[]>;
}

import { Permission } from "../../../database/entities";

export interface PermissionRepositoryInterface {
    store(description: string, key: string): Promise<Permission>;
}

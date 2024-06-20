import { User } from "../../../database/entities";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export interface userRepositoryInterface {
    store(data: Partial<User>): Promise<User>;
    update(id: string, data: QueryDeepPartialEntity<User>): Promise<void>;
    selectById(id: string): Promise<User | undefined>;
    selectAll(): Promise<User[]>;
}

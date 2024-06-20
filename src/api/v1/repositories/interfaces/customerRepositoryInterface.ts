import { Customer } from "../../../database/entities/customer";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { CustomerInterface } from "../../interfaces/customerInterface";


export interface CustomerRepositoryInterface {
    store(name: string, taxIdentifier: string, phone: string, email: string, password: string): Promise<Customer>
    selectAll(): Promise<Customer[]>
    selectById(id: string): Promise<Customer | void>
    update({ id, name, taxIdentifier, phone, email }: CustomerInterface): Promise<void>
}

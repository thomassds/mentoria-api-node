import { EntityRepository, Repository, getRepository } from "typeorm";
import { Customer } from "../../database/entities/customer";
import { Service } from "typedi";
import { CustomerRepositoryInterface } from "./interfaces/customerRepositoryInterface";
import { DatabaseError } from "../../../config/exceptions";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { CustomerInterface } from "../interfaces/customerInterface";

@Service()
@EntityRepository(Customer)
export class CustomerRepository implements CustomerRepositoryInterface {
    private readonly repository: Repository<Customer>

    constructor() {
        this.repository = getRepository(Customer)
    }

    async store(name: string, taxIdentifier: string, phone: string, email: string): Promise<Customer> {
        try {
            const response = await this.repository.save({
                name, taxIdentifier, phone, email,
            });

            return response
        } catch (error: any) {
            throw new DatabaseError("Fail to save this customer", error)
        }
    }

    async selectAll(): Promise<Customer[]> {
        try {
            const response = await this.repository.find()

            return response
        } catch (erro: any) {
            throw new DatabaseError("Fail to get all permissions", erro)
        }
    }

    async selectById(id: string): Promise<void | Customer> {
        try {
            const response = await this.repository.findOne(id)

            return response
        } catch (error: any) {
            throw new DatabaseError("Fail to get this customer", error)
        }
    }

    async update({ id, name, taxIdentifier, phone, email }: CustomerInterface): Promise<void> {
        try {
            await this.repository.update({id}, {name, taxIdentifier, phone, email})
            
            return
        } catch (error: any) {
            throw new DatabaseError("Fail to update this customer", error)
        }
    }
}
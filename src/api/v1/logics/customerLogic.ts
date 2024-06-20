import Container, { Service } from "typedi";
import { CustomerRepository } from "../repositories/customerRepository";
import { CustomerInterface } from "../interfaces/customerInterface";

@Service()
export class CustomerLogic {
    private customerRepository: CustomerRepository

    constructor() {
        this.customerRepository = Container.get(CustomerRepository)
    }

    async store(name: string, taxIdentifier: string, phone: string, email: string) {
        return this.customerRepository.store(name, taxIdentifier, phone, email)
    }

    async selectAll() {
        const response = await this.customerRepository.selectAll()

        return response
    }

    async selectById(id: string) {
        const response = await this.customerRepository.selectById(id)
        
        return response
    }

    async update({id, name, taxIdentifier, phone, email}: CustomerInterface) {
        const response = await this.customerRepository.update({
            id,
            name,
            taxIdentifier,
            phone,
            email
        })

        return response
    }
}

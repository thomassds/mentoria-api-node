import Container, { Service } from "typedi";
import { PermissionRepository } from "../repositories";
import { PermissionInterface } from "../interfaces";

@Service()
export class PermissionLogic {
    private permissionRepository: PermissionRepository;

    constructor() {
        this.permissionRepository = Container.get(PermissionRepository);
    }

    async store({ key, description }: PermissionInterface) {
        const response = await this.permissionRepository.store({
            description,
            key,
        });

        return response;
    }

    async selectAll() {
        const response = await this.permissionRepository.selectAll();

        return response;
    }

    async selectById(id: string) {
        const response = await this.permissionRepository.selectById(id);

        return response;
    }

    async update({ id, description, key }: PermissionInterface) {
        const response = await this.permissionRepository.update({
            id,
            description,
            key,
        });

        return response;
    }
}

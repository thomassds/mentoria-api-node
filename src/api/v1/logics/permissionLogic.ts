import Container, { Service } from "typedi";
import { PermissionRepository } from "../repositories";

@Service()
export class PermissionLogic {
    private permissionRepository: PermissionRepository;

    constructor() {
        this.permissionRepository = Container.get(PermissionRepository);
    }

    async store(description: string, key: string) {
        return this.permissionRepository.store(description, key);
    }
}

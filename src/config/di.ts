import Container from "typedi";
import { getCustomRepository } from "typeorm";

import { StorageService } from "../api/v1/interfaces/storage.service";
import { DiskStorageService } from "../api/v1/services/disk-storage";
import { Storage } from "./storage";
import { S3StorageService } from "../api/v1/services/s3-storage";
export class DI {
    static register() {
        let storageService: StorageService = new DiskStorageService();

        if (Storage.driver === "s3") {
            storageService = new S3StorageService();
        }

        Container.set("StorageService", storageService);
    }
}

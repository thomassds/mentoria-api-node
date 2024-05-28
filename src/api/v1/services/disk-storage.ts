import * as fs from "fs";
import * as path from "path";
import { StorageService } from "../interfaces/storage.service";
import { File } from "../models/file";
import { Storage } from "../../../config/storage";

export class DiskStorageService implements StorageService {
    async save(userId: string, file: File): Promise<string> {
        const fileExists = await file.exists();

        if (!fileExists) return "";

        const destination = path.resolve(Storage.uploadsFolder, file.name);

        await fs.promises.copyFile(file.path, destination);

        return destination;
    }

    async delete(path: string, file: File): Promise<void> {
        await file.delete();
    }
}

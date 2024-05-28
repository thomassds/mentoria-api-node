import * as fs from "fs";
import * as path from "path";

export class Storage {
    static readonly driver = process.env.STORAGE_DRIVER;
    static readonly tmpFolder = path.resolve(
        __dirname,
        "..",
        "..",
        "storage",
        "tmp"
    );
    static readonly uploadsFolder = path.resolve(
        __dirname,
        "..",
        "..",
        "storage",
        "uploads"
    );

    static init() {
        Storage.createUploadsFolderIfNotExits();
    }

    private static async createUploadsFolderIfNotExits() {
        try {
            await fs.promises.access(Storage.uploadsFolder);
        } catch (error: any) {
            if (error?.code === "ENOENT") {
                await fs.promises.mkdir(Storage.uploadsFolder, {
                    recursive: true,
                });
            }
        }
    }
}

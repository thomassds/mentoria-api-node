import { File } from "../models/file";

export interface StorageService {
    save(path: string, file: File): Promise<string>;
    delete(path: string, file: File): Promise<void>;
}

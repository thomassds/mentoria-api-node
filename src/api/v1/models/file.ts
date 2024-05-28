import * as fs from "fs";

export class File {
    originalName!: string;
    name!: string;
    mimeType!: string;
    path!: string;
    url!: string | null;

    async exists() {
        if (!this.path) {
            return false;
        }

        try {
            await fs.promises.access(this.path);
            return true;
        } catch (error) {
            return false;
        }
    }

    async delete() {
        const fileExists = await this.exists();

        if (!fileExists) return;

        await fs.promises.unlink(this.path);
    }
}

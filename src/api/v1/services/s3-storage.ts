import S3 from "aws-sdk/clients/s3";
import * as fs from "fs";
import { StorageService } from "../interfaces/storage.service";
import { File } from "../models/file";
import {} from "../../../config";
import { AWSEnv } from "../../../config";

export class S3StorageService implements StorageService {
    private client: S3;

    constructor() {
        this.client = new S3({
            apiVersion: "2006-03-01",
            region: AWSEnv.bucketRegion,
        });
    }

    async save(path: string, file: File): Promise<string> {
        const buffer = await fs.promises.readFile(file.path);

        const response = await this.client
            .upload({
                Bucket: AWSEnv.bucket as string,
                Body: buffer,
                Key: `${path}/${file.name}`,
                ContentType: file.mimeType,
            })
            .promise();

        return response.Location;
    }

    async delete(path: string, file: File): Promise<void> {
        const response = await this.emptyS3Directory(
            AWSEnv.bucket as string,
            path
        );

        console.log(path);
    }

    async emptyS3Directory(bucket: string, dir: string) {
        const listParams = {
            Bucket: bucket,
            Prefix: dir,
        };

        const listedObjects = await this.client
            .listObjectsV2(listParams)
            .promise();

        if (listedObjects.Contents?.length === 0) return;

        const deleteParams = {
            Bucket: bucket,
            Delete: {
                Objects: listedObjects.Contents?.map(({ Key }) => ({
                    Key,
                })) as never,
            },
        };

        await this.client.deleteObjects(deleteParams).promise();

        if (listedObjects.IsTruncated) await this.emptyS3Directory(bucket, dir);
    }
}

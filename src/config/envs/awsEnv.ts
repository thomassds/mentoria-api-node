export class AWSEnv {
    static readonly accessKeyId = process.env.AWS_ACCESS_KEY_ID;
    static readonly secretAcessKey = process.env.AWS_SECRET_ACCESS_KEY;
    static readonly bucketRegion = process.env.AWS_BUCKET_REGION;
    static readonly bucket = process.env.AWS_BUCKET;
}

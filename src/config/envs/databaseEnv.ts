import { Environments } from "./enums/exeptions/enums/environments";

export class DatabaseEnvs {
    static readonly environment = process.env.NODE_ENV || Environments.DEVELOP;

    static readonly database = {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        name: process.env.DATABASE_NAME,
    };
}

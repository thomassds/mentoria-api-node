import * as path from "path";
import { Connection, createConnections } from "typeorm";
import { Service } from "typedi";
import { DatabaseEnvs } from "./envs";

export interface IDBConnection<t> {
    instance: t;
    connect(): Promise<any>;
    disconnect(): Promise<any>;
}

@Service()
export class TypeORMConnection implements IDBConnection<Connection[]> {
    private _instance: Connection[] = [];

    async connect(): Promise<void> {
        const entitiesDir = path.join(
            "dist",
            "api",
            "database",
            "entities",
            "*.js"
        );
        const migrationsDir = path.join(
            "dist",
            "api",
            "database",
            "migrations",
            "*.js"
        );

        this._instance = await createConnections([
            {
                type: "postgres",
                host: DatabaseEnvs.database.host,
                port: parseInt(DatabaseEnvs.database.port as string),
                username: DatabaseEnvs.database.username,
                password: DatabaseEnvs.database.password,
                database: DatabaseEnvs.database.name,
                logging: false,
                entities: [entitiesDir],
                migrations: [migrationsDir],
            },
        ]);

        await this.runMigrations();
    }

    async disconnect(): Promise<void> {
        await Promise.all(this.instance.map((instance) => instance.close()));
    }

    public get instance(): Connection[] {
        return this._instance;
    }

    private async runMigrations(): Promise<void> {
        try {
            for (const connection of this._instance) {
                await connection.runMigrations();
                console.log(
                    "Migrations executed successfully for connection:",
                    connection.name
                );
            }
        } catch (error) {
            console.error("Error executing migrations:", error);
        }
    }
}

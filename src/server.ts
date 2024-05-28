import { Express } from "express";
import { AppEnvs } from "./config";

export class Server {
    static async init(app: Express) {
        app.listen(AppEnvs.server.port, () => {
            console.info(
                `server started on port ${AppEnvs.server.port} Enviroment:${AppEnvs.environment}`
            );
        });
    }
}

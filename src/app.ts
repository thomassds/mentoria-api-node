import express, { Express, json, urlencoded } from "express";
import "express-async-errors";
import cors from "cors";
import Container from "typedi";
import { TypeORMConnection } from "./config/database";
import { DI } from "./config/di";
import { AppRouters } from "./config/routers";
import { getCorsConfig } from "./config/cors";

export default class App {
    static async build() {
        const app: Express = express();

        const database = Container.get(TypeORMConnection);

        await database.connect();

        app.use(json());

        console.info("Loading cors");
        app.use(cors());

        DI.register();

        AppRouters.load(app);

        AppRouters.handleError(app);

        return app;
    }
}

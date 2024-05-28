import "reflect-metadata";
import { Express } from "express";
require("dotenv").config();
import App from "./app";
import { Server } from "./server";

class Bootstrap {
    static async main() {
        const app: Express = await App.build();
        Server.init(app);
    }
}

Bootstrap.main();

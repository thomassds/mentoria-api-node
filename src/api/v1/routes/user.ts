import { Router } from "express";

import Container from "typedi";
import { UserController } from "../controllers";

export class UserRouter {
    static getRouter(): Router {
        const controller = Container.get(UserController);

        const router = Router();

        router.post("/users", controller.store);

        return router;
    }
}

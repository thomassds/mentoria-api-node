import { Router } from "express";

import Container from "typedi";
import { UserController } from "../controllers";
import { RouteValidator } from "./validations";
import { storeUserValidator } from "./schemas/users/storeUser";

export class UserRouter {
    static getRouter(): Router {
        const controller = Container.get(UserController);

        const router = Router();

        router.post(
            "/users",
            RouteValidator.validate(storeUserValidator.rules()),
            controller.store
        );

        router.get("/users", controller.selectAll);
        return router;
    }
}

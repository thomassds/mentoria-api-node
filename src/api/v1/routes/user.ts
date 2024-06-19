import { Router } from "express";

import Container from "typedi";
import { UserController } from "../controllers";
import { RouteValidator } from "./validations";
import { storeUserValidator } from "./schemas/users/storeUser";
import { SelectByIdUsersValidator } from "./schemas/users/selectByIdUser";
import { UpdateUserValidator } from "./schemas/users/updateUser";

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

        router.get(
            "/users/:id",
            RouteValidator.validate(SelectByIdUsersValidator.rules()),
            controller.selectById
        );

        router.put(
            "/users",
            RouteValidator.validate(UpdateUserValidator.rules()),
            controller.update
        );

        return router;
    }
}

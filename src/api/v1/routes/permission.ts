import { Router } from "express";

import Container from "typedi";
import { PermissionController } from "../controllers";

import { RouteValidator } from "./validations";
import { StorePermissionValidator } from "./schemas/permissions/storePermission";

export class PermissionRouter {
    static getRouter(): Router {
        const controller = Container.get(PermissionController);

        const router = Router();

        router.post(
            "/permissions",
            RouteValidator.validate(StorePermissionValidator.rules()),
            controller.store
        );

        return router;
    }
}

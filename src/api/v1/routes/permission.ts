import { Router } from "express";
import { RouteValidator } from "./validations";
import Container from "typedi";
import { StorePermissionValidator } from "./schemas/permissions/storePermission";
import { PermissionController } from "../controllers";
import { SelectByIdPermissionValidator } from "./schemas/permissions/selectByIdPermission";
import { UpdatePermissionValidator } from "./schemas/permissions/updatePermission";

export class PermissionRouter {
    static getRouter(): Router {
        const controller = Container.get(PermissionController);

        const router = Router();

        router.post(
            "/permissions",
            RouteValidator.validate(StorePermissionValidator.rules()),
            controller.store
        );

        router.get("/permissions", controller.selectAll);

        router.get(
            "/permissions/:id",
            RouteValidator.validate(SelectByIdPermissionValidator.rules()),
            controller.selectById
        );

        router.put(
            "/permissions",
            RouteValidator.validate(UpdatePermissionValidator.rules()),
            controller.update
        );

        return router;
    }
}

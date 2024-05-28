import { Router } from "express";
import { UserRouter } from "./user";
import { PermissionRouter } from "./permission";

export const getV1Routes = () => {
    const router = Router();

    const routers: any[] = [UserRouter, PermissionRouter];

    routers.forEach((routerClass) => {
        router.use(routerClass.getRouter());
    });

    return router;
};

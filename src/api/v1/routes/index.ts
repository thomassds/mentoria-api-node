import { Router } from "express";
import { UserRouter } from "./user";
import { PermissionRouter } from "./permission";
import { CustomerRouter } from "./customer"

export const getV1Routes = () => {
    const router = Router();

    const routers: any[] = [UserRouter, PermissionRouter, CustomerRouter];

    routers.forEach((routerClass) => {
        router.use(routerClass.getRouter());
    });

    return router;
};

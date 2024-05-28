import { Router } from "express";

import { UserRouter } from "./user";

export const getV1Routes = () => {
    const router = Router();

    const routers: any[] = [UserRouter];

    routers.forEach((routerClass) => {
        router.use(routerClass.getRouter());
    });

    return router;
};

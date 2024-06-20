import { Router } from "express"

import Container from "typedi"
import { CustomerController } from "../controllers/customerController"

import { RouteValidator } from "./validations"
import { StoreCustomerValidator } from "./schemas/customers/storeCustomer"
import { UpdateCustomerValidator } from "./schemas/customers/updateCustomer"
import { SelectByIdCustomerValidator } from "./schemas/customers/selectByIdCustomer"

export class CustomerRouter {
    static getRouter(): Router {
        const controller = Container.get(CustomerController);

        const router = Router();

        router.post(
            "/customers",
            RouteValidator.validate(StoreCustomerValidator.rules()),
            controller.store
        );

        router.get("/customers", controller.selectAll)

        router.get(
            "/customers/:id",
            RouteValidator.validate(SelectByIdCustomerValidator.rules()),
            controller.selectById
        )

        router.put(
            "/customers",
            RouteValidator.validate(UpdateCustomerValidator.rules()),
            controller.update
        )

        return router;
    }
}

import * as Joi from "joi";
import { SchemaValidator } from "../../validations";

export class StoreCustomerValidator {
    static rules(): SchemaValidator {
        return {
            body: Joi.object({
                name: Joi.string().required(),
                taxIdentifier: Joi.string().required(),
                phone: Joi.string().required(),
                email: Joi.string().required(),
            })
        }
    }
}

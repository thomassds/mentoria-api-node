import * as Joi from "joi";
import { SchemaValidator } from "../../validations";

export class UpdateCustomerValidator {
    static rules(): SchemaValidator {
        return {
            params: Joi.object({
                id: Joi.string(),
                name: Joi.string().required(),
                taxIdentifier: Joi.string().required(),
                phone: Joi.string().required(),
                email: Joi.string().required(),
            }),
        }
    }
}

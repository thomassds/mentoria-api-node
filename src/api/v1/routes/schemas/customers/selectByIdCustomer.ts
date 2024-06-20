import * as Joi from "joi";
import { SchemaValidator } from "../../validations";

export class SelectByIdCustomerValidator {
    static rules(): SchemaValidator {
        return {
            params: Joi.object({
                id: Joi.string().required(),
            }),
        };
    }
}
import * as Joi from "joi";
import { SchemaValidator } from "../../validations";

export class StorePermissionValidator {
    static rules(): SchemaValidator {
        return {
            body: Joi.object({
                description: Joi.string().required(),
                key: Joi.string().required(),
            }),
        };
    }
}

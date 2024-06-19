import * as Joi from "joi";
import { SchemaValidator } from "../../validations";

export class UpdatePermissionValidator {
    static rules(): SchemaValidator {
        return {
            body: Joi.object({
                id: Joi.string().required(),
                description: Joi.string().required(),
                key: Joi.string().required(),
            }),
        };
    }
}

import * as Joi from "joi";
import { SchemaValidator } from "../../validations";

export class UpdateUserValidator {
    static rules(): SchemaValidator {
        return {
            body: Joi.object({
                id: Joi.string().required(),
                name: Joi.string().required(),
                phone: Joi.string().required(),
                password: Joi.string().required(),
                email: Joi.string().required(),
            }),
        };
    }
}

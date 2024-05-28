import { sign } from "jsonwebtoken";
import { Service } from "typedi";
import { AppEnvs } from "../../../config/envs/appEnv";

@Service()
export class Jwt {
    generateToken(id: string) {
        return sign({ id }, AppEnvs.services.clientSecret);
    }

    generateTokenToUrl(id: string) {
        const token = sign({ id }, AppEnvs.services.clientSecret);

        const removeSpecialCatacters = token
            .replace(/\./g, "")
            .replace(/\_/g, "")
            .replace(/\+/g, "")
            .replace(/\//g, "")
            .replace(/=/g, "");

        console.log(removeSpecialCatacters);

        return removeSpecialCatacters;
    }
}

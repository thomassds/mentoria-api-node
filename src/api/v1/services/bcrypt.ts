import { compare, hash } from "bcrypt";
import { Service } from "typedi";

@Service()
export class Bcrypt {
  async generateHash(password: string) {
    return await hash(password, 8);
  }

  async compareHash(password: string, passwordHash: string) {
    return await compare(password, passwordHash);
  }
}

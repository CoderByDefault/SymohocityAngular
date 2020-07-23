import { genSalt, hash, compare } from "bcryptjs";
import { inject } from "@loopback/core";
import { PasswordHasherBindings } from "../keys";

export type HashPassword = (
  password: string,
  rounds: number
) => Promise<string>;

export async function hashPassword(
  password: string,
  rounds: number
): Promise<string> {
  const salt = await genSalt(rounds);
  return await hash(password, salt)
}

export interface PasswordHasher<T = string> {
  hashPassword(password: T): Promise<T>;
  comparePassword(providePass: T, storedPass: T): Promise<boolean>
}

export class BcryptHasherService implements PasswordHasher<string>{
  constructor(
    @inject(PasswordHasherBindings.ROUNDS) private readonly rounds: number
  ) { }

  async hashPassword(password: string): Promise<string> {
    const salt = await genSalt(this.rounds);
    return hash(password, salt)
  }

  async comparePassword(providePass: string, storedPass: string): Promise<boolean> {
    //let passIsMatched = await (providePass === storedPass) ? true : false; //klartext pw test
    let passIsMatched = await compare(providePass, storedPass);
    return passIsMatched;
  }


}

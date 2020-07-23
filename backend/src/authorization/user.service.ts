import { HttpErrors } from "@loopback/rest";
import { inject } from "@loopback/context";
import { UserService, UserProfile } from "@loopback/authentication";
import { repository } from "@loopback/repository";

import { LoginCredentials, UserRepository } from "../repositories/user.repository";
import { User } from "../models/user.model";
import { PasswordHasher } from "./hash-password.service";
import { PasswordHasherBindings } from "../keys";
import { parse } from "path-to-regexp";

export class SympholightUserService implements UserService<User, LoginCredentials>{

  constructor(
    @repository(UserRepository) public userReppo: UserRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER) public passwordHasher: PasswordHasher
  ) { }

  async verifyCredentials(credentials: LoginCredentials): Promise<User> {
    const foundUser = await this.userReppo.findOne({
      where: { name: credentials.name }
    })
    if (!foundUser) throw new HttpErrors.NotFound(`User with name ${credentials.name} not found`);

    let passMatch = await this.passwordHasher.comparePassword(
      credentials.password,
      foundUser.password
    );

    if (!passMatch) throw new HttpErrors.Unauthorized(`Credentials are not Correct`)
    return foundUser;
  }
  convertToUserProfile(user: User): UserProfile {
    let id1: string = user.id || '';
    let name1: string = user.name || '';

    return { id: id1, name: name1 };
  }
}

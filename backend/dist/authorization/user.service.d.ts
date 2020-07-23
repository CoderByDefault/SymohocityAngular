import { UserService, UserProfile } from "@loopback/authentication";
import { LoginCredentials, UserRepository } from "../repositories/user.repository";
import { User } from "../models/user.model";
import { PasswordHasher } from "./hash-password.service";
export declare class SympholightUserService implements UserService<User, LoginCredentials> {
    userReppo: UserRepository;
    passwordHasher: PasswordHasher;
    constructor(userReppo: UserRepository, passwordHasher: PasswordHasher);
    verifyCredentials(credentials: LoginCredentials): Promise<User>;
    convertToUserProfile(user: User): UserProfile;
}

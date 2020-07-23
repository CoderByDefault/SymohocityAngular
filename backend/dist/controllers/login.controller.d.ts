import { TokenService, UserService } from "@loopback/authentication";
import { User } from "../models";
import { UserRepository, LoginCredentials } from "../repositories";
import { PasswordHasher } from "../authorization/hash-password.service";
export declare class LoginController {
    userRepo: UserRepository;
    passwordHasher: PasswordHasher;
    jwtService: TokenService;
    userService: UserService<User, LoginCredentials>;
    constructor(userRepo: UserRepository, passwordHasher: PasswordHasher, jwtService: TokenService, userService: UserService<User, LoginCredentials>);
    login(credentials: LoginCredentials): Promise<{
        token: string;
    }>;
}

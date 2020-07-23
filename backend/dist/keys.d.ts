import { BindingKey } from "@loopback/context";
import { PasswordHasher } from "./authorization/hash-password.service";
import { TokenService, UserService } from "@loopback/authentication";
import { User } from './models';
import { LoginCredentials } from "./repositories";
export declare namespace TokenServiceConstants {
    const TOKEN_SECRET_VALUE = "myjwts3cr3t";
    const TOKEN_EXPIRES_IN_VALUE = "600";
}
export declare namespace ToKenServiceBindings {
    const TOKEN_SECRET: BindingKey<string>;
    const TOKEN_EXPIRES_IN: BindingKey<string>;
    const TOKEN_SERVICE: BindingKey<TokenService>;
}
export declare namespace PasswordHasherBindings {
    const PASSWORD_HASHER: BindingKey<PasswordHasher<string>>;
    const ROUNDS: BindingKey<number>;
}
export declare namespace UserServiceBindings {
    const USER_SERVICE: BindingKey<UserService<User, LoginCredentials>>;
}

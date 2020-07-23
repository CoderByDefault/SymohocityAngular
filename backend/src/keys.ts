import { BindingKey } from "@loopback/context";
import { PasswordHasher } from "./authorization/hash-password.service";
import { TokenService, UserService } from "@loopback/authentication";
import { User } from './models';
import { LoginCredentials } from "./repositories";

export namespace TokenServiceConstants {
  export const TOKEN_SECRET_VALUE = 'myjwts3cr3t';
  export const TOKEN_EXPIRES_IN_VALUE = '600';
}

export namespace ToKenServiceBindings {
  export const TOKEN_SECRET = BindingKey.create<string>('authentication.jwt.secret');
  export const TOKEN_EXPIRES_IN = BindingKey.create<string>('authentication.jwt.expires.in.seconds');
  export const TOKEN_SERVICE = BindingKey.create<TokenService>('authentication.jwt.tokenservice');
}

export namespace PasswordHasherBindings {
  export const PASSWORD_HASHER = BindingKey.create<PasswordHasher>('services.hasher');
  export const ROUNDS = BindingKey.create<number>('services.hasher.round');
}

export namespace UserServiceBindings {
  export const USER_SERVICE = BindingKey.create<UserService<User, LoginCredentials>>('services.user.service');
}

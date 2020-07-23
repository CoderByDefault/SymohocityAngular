import { Getter, Provider } from "@loopback/context";
import { AuthorizationMetaData, AuthorizeFn } from "../types";
export declare class AuthorizationActionProvider implements Provider<AuthorizeFn> {
    private readonly getMetaData;
    constructor(getMetaData: Getter<AuthorizationMetaData>);
    value(): AuthorizeFn;
    action(userPermissons: string[]): Promise<boolean>;
}

import { Constructor, Provider } from "@loopback/context";
import { AuthorizationMetaData } from "../types";
export declare class AuthorizationMetadataProvider implements Provider<AuthorizationMetaData | undefined> {
    private readonly controllerClass;
    private readonly methodName;
    constructor(controllerClass: Constructor<{}>, methodName: string);
    value(): AuthorizationMetaData | undefined;
    getAuthorizeMetadata(controllerClass: Constructor<{}>, methodName: string): AuthorizationMetaData | undefined;
}

import { BindingKey } from "@loopback/context";
import { MetadataAccessor } from "@loopback/metadata";
import { AuthorizeFn, AuthorizationMetaData, UserPermissionsFn } from "./types";
export declare namespace AuthorizationBinding {
    const AUTHORIZE_ACTION: BindingKey<AuthorizeFn>;
    const METADATA: BindingKey<AuthorizationMetaData | undefined>;
    const USER_PERMISSIONS: BindingKey<UserPermissionsFn>;
}
export declare const AUTHRIZATION_METADATA_ACCESSOR: MetadataAccessor<AuthorizationMetaData, MethodDecorator>;

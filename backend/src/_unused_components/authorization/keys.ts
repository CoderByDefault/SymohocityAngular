import { BindingKey } from "@loopback/context";
import { MetadataAccessor } from "@loopback/metadata";
import { AuthorizeFn, AuthorizationMetaData, UserPermissionsFn } from "./types";

export namespace AuthorizationBinding {
  export const AUTHORIZE_ACTION = BindingKey.create<AuthorizeFn>('userAuthorization.actions.authorize');
  export const METADATA = BindingKey.create<AuthorizationMetaData | undefined>('userAuthorization.operationMetadata');
  export const USER_PERMISSIONS = BindingKey.create<UserPermissionsFn>('userAuthorization.actions.userPermissions');
}

export const AUTHRIZATION_METADATA_ACCESSOR = MetadataAccessor.create<AuthorizationMetaData, MethodDecorator>('userAuthorization.accessor.operationMetadata');

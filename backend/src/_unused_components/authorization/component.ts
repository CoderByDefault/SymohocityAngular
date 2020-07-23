import { Component, ProviderMap } from "@loopback/core";
import { AuthorizationBinding } from "./keys";
import { AuthorizationActionProvider, AuthorizationMetadataProvider, UserPermissionsProvider } from "./providers";

export class AuthorizationComponent implements Component {
  providers?: ProviderMap;

  constructor() {
    this.providers = {
      [AuthorizationBinding.AUTHORIZE_ACTION.key]: AuthorizationActionProvider,
      [AuthorizationBinding.METADATA.key]: AuthorizationMetadataProvider,
      [AuthorizationBinding.USER_PERMISSIONS.key]: UserPermissionsProvider,

    }
  }
}

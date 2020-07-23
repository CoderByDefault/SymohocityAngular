import { Getter, inject, Provider } from "@loopback/context";

import { AuthorizationBinding } from "../keys";
import { AuthorizationMetaData, AuthorizeFn } from "../types";

import { intersection } from "lodash";

export class AuthorizationActionProvider implements Provider<AuthorizeFn>{
  constructor(
    @inject.getter(AuthorizationBinding.METADATA) private readonly getMetaData: Getter<AuthorizationMetaData>
  ) { }

  value(): AuthorizeFn {
    return response => this.action(response);
  }

  async action(userPermissons: string[]): Promise<boolean> {
    const metadata: AuthorizationMetaData = await this.getMetaData()
    if (!metadata) return false;
    else if (metadata.permissons.indexOf('*') === 0) return true;

    const permissionsToCheck = metadata.permissons;
    return intersection(userPermissons, permissionsToCheck).length > 0;
  }

}

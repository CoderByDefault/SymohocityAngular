import { Constructor, inject, MetadataInspector, Provider } from "@loopback/context";
import { CoreBindings } from "@loopback/core";

import { AUTHRIZATION_METADATA_ACCESSOR } from "../keys";
import { AuthorizationMetaData } from "../types";

export class AuthorizationMetadataProvider implements Provider<AuthorizationMetaData | undefined>{
  constructor(
    @inject(CoreBindings.CONTROLLER_CLASS) private readonly controllerClass: Constructor<{}>,
    @inject(CoreBindings.CONTROLLER_METHOD_NAME) private readonly methodName: string
  ) { }
  value(): AuthorizationMetaData | undefined {
    return this.getAuthorizeMetadata(this.controllerClass, this.methodName);
  }
  getAuthorizeMetadata(controllerClass: Constructor<{}>, methodName: string): AuthorizationMetaData | undefined {
    return MetadataInspector.getMethodMetadata<AuthorizationMetaData>(
      AUTHRIZATION_METADATA_ACCESSOR,
      controllerClass.prototype,
      methodName
    )
  }
}

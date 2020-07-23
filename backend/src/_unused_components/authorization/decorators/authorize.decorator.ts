import { MethodDecoratorFactory } from "@loopback/core";
import { AuthorizationMetaData } from "../types";
import { AUTHRIZATION_METADATA_ACCESSOR } from "../keys";

export function authorize(permissons: string[]) {
  return MethodDecoratorFactory.createDecorator<AuthorizationMetaData>(AUTHRIZATION_METADATA_ACCESSOR, {
    permissons: permissons || []
  })
}

import { Entity, model, property } from '@loopback/repository';
import { PermissionKey } from '../_unused_components/authorization';

@model({ name: 'roles' })
export class Role extends Entity {

  @property.array(String, {
    required: true
  })
  permissions: PermissionKey[];


  constructor(data?: Partial<Role>) {
    super(data);
  }
}

export interface RoleRelations {
  // describe navigational properties here
}

export type RoleWithRelations = Role & RoleRelations;

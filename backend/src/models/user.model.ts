import { Entity, model, property } from '@loopback/repository';
import { UserPermission } from '../_unused_components/authorization';


@model({ })
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated:true
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    default: new Date(),
    generated:true
  })
  created_at: string;



  @property.array(String)
  permissions: UserPermission[];


  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;

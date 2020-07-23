import { Entity, model, property, hasMany } from '@loopback/repository';
import { Instance, InstanceWithRelations } from './instance.model';

@model({ settings: {hidden:["id"]} })
export class Workspace extends Entity {
  @property({
    type: 'string',
    id: true,
    generated:true
  })
  id?: string;

  @property({
    type: 'string',
    default: Workspace,
  })
  name?: string;

  @property({
    type: 'string',
  })
  map?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  center_coords?: string[];

  @property({
    type: 'string',
    default: new Date(),
    generated:true
  })
  created_at: string;

  @hasMany(() => Instance)
  instances: Instance[];


  constructor(data?: Partial<Workspace>) {
    super(data);
  }
}

export interface WorkspaceRelations {
  instances?: InstanceWithRelations[];
}

export type WorkspaceWithRelations = Workspace & WorkspaceRelations;

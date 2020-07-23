import { Entity, model, property, belongsTo, hasMany } from '@loopback/repository';
import { Workspace, WorkspaceWithRelations } from './workspace.model';
import { Device, DeviceWithRelations } from "./device.model";

@model({ settings: {hidden:["id"]} })
export class Instance extends Entity {
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
  ipaddress: string;

  @property({
    type: 'string',
    required: true,
  })
  server_login: string;

  @property({
    type: 'string',
    required: true,
  })
  server_password: string;

  @property({
    type: 'string',
    required: true,
  })
  lng: string;

  @property({
    type: 'string',
    required: true,
  })
  lat: string;

  @property({
    type: 'boolean',
    default: false,
  })
  is_online: boolean;

  @property({
    type: 'string',
    default: new Date(),
    generated:true
  })
  created_at: string;

  @hasMany(() => Device)
  devices: Device[];

  @belongsTo(() => Workspace)
  workspaceId: number;

  constructor(data?: Partial<Instance>) {
    super(data);
  }
}

export interface InstanceRelations {
  workspace?: WorkspaceWithRelations;
  devices?: DeviceWithRelations[];
}

export type InstanceWithRelations = Instance & InstanceRelations;

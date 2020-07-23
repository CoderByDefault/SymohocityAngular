import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Instance, InstanceWithRelations } from "./instance.model";

@model({ settings: {hidden:["id"]} })
export class Device extends Entity {
  @property({
    type: 'string',
    id: true,
    generated:true
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'string',
    default: new Date(),
    generated:true

  })
  created_at: string;

  @belongsTo(() => Instance)
  instanceId: number;

  constructor(data?: Partial<Device>) {
    super(data);
  }
}

export interface DeviceRelations {
  instance?: InstanceWithRelations;
}

export type DeviceWithRelations = Device & DeviceRelations;

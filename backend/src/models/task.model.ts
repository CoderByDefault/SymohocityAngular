import {Entity, model, property, belongsTo} from '@loopback/repository';
import { Instance, InstanceWithRelations } from './instance.model';

@model({settings: {}})
export class Task extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'string',
  })
  datetime?: string;

  @property({
    type: 'string',
    default: new Date(),
    generated:true

  })
  created_at: string;

  @belongsTo(() => Instance)
  instanceId: number;

  constructor(data?: Partial<Task>) {
    super(data);
  }
}

export interface TaskRelations {
  instance?: InstanceWithRelations;
}

export type TaskWithRelations = Task & TaskRelations;

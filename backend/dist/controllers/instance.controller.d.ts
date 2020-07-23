import { Count, Filter, Where } from '@loopback/repository';
import { Instance } from '../models';
import { InstanceRepository } from '../repositories';
export declare class InstanceController {
    instanceRepository: InstanceRepository;
    constructor(instanceRepository: InstanceRepository);
    create(instance: Instance): Promise<Instance>;
    count(where?: Where<Instance>): Promise<Count>;
    find(filter?: Filter<Instance>): Promise<Instance[]>;
    updateAll(instance: Instance, where?: Where<Instance>): Promise<Count>;
    findById(id: string): Promise<Instance>;
    updateById(id: string, instance: Instance): Promise<void>;
    replaceById(id: string, instance: Instance): Promise<void>;
    deleteById(id: string): Promise<void>;
}

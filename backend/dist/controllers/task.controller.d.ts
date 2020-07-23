import { Count, Filter, Where } from '@loopback/repository';
import { Task } from '../models';
import { TaskRepository } from '../repositories';
export declare class TaskController {
    taskRepository: TaskRepository;
    constructor(taskRepository: TaskRepository);
    create(task: Task): Promise<Task>;
    count(where?: Where<Task>): Promise<Count>;
    find(filter?: Filter<Task>): Promise<Task[]>;
    updateAll(task: Task, where?: Where<Task>): Promise<Count>;
    findById(id: string): Promise<Task>;
    updateById(id: string, task: Task): Promise<void>;
    replaceById(id: string, task: Task): Promise<void>;
    deleteById(id: string): Promise<void>;
}

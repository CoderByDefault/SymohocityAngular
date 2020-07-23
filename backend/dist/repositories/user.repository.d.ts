import { DefaultCrudRepository } from '@loopback/repository';
import { User, UserRelations } from '../models';
import { CouchDataSource } from '../datasources';
export declare type LoginCredentials = {
    name: string;
    password: string;
};
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id, UserRelations> {
    constructor(dataSource: CouchDataSource);
}

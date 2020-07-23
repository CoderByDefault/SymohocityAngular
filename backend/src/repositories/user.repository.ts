import { DefaultCrudRepository } from '@loopback/repository';
import { User, UserRelations } from '../models';
import { CouchDataSource } from '../datasources';
import { inject } from '@loopback/core';

export type LoginCredentials = {
  name: string;
  password: string;
};

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
  > {
  constructor(
    @inject('datasources.couch') dataSource: CouchDataSource,
  ) {
    super(User, dataSource);
  }
}

import { inject } from '@loopback/core';
import { juggler } from '@loopback/repository';
import * as config from './couch.datasource.json';

export class CouchDataSource extends juggler.DataSource {
  static dataSourceName = 'couch';

  constructor(
    @inject('datasources.config.couch', { optional: true })
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

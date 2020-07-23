import { juggler } from '@loopback/repository';
export declare class CouchDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}

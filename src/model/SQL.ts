import {IDatabase} from '../interfases/IDatabase';
import {Connection, ConnectionConfig, createConnection, MysqlError} from 'mysql';

export class SQL implements IDatabase<Array<Record<string, unknown>>> {
    private connection: Connection;
    constructor(configuration: ConnectionConfig) {
      this.connection = createConnection(configuration);
    }

    async query(request: string, values?: Record<string, unknown>): Promise<Array<Record<string, unknown>>> {
      try {
        this.connection.connect();
        const response: Array<Record<string, unknown>> = await new Promise((resolve, reject) => {
          this.connection.query(request, values, (error: MysqlError | null, result: Array<Record<string, unknown>>) => {
            if (error) {
              reject(error);
            }
            resolve(result);
          });
        });
        this.connection.end();
        return response;
      } catch (e) {
        throw new Error(`Connection to SQL failed: ${e.message}`);
      }
    }
}

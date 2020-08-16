import {
  Connection,
  ConnectionConfig,
  createConnection,
  MysqlError,
} from 'mysql';

export class SqlDbProvider<T, V> {
  constructor(private connectionConfig: ConnectionConfig) {}
  private async fetch(request: string): Promise<T[] | V> {
    const connection: Connection = createConnection(this.connectionConfig);
    connection.connect();
    const response: T[] = await new Promise((resolve, reject) => {
      connection.query(request, (errors: MysqlError | null, result: T[]) => {
        resolve(result);
      });
    });
    connection.end();
    return response;
  }
  public async get(request: string): Promise<T[]> {
    return await this.fetch(request) as T[];
  }
  public async put(request: string): Promise<V> {
    return await this.fetch(request) as V;
  }
}

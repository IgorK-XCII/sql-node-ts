import {IDatabase} from '../interfases/IDatabase';

export class Database<T> {
  constructor(private database: IDatabase<T>) {}

  async request(req: string, values?: Record<string, unknown>): Promise<T> {
    return await this.database.query(req, values);
  }
}

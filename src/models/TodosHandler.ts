import {Todo} from './Todo';
import {SqlDbProvider} from './SQL/SqlDbProvider';
import {RowDataPacket} from './SQL/Models/RowDataPacket';
import {OkPacket} from 'mysql';
import {objectFieldToUpdateQuery, stringToBoolean} from '../shared/utils';
import {ITodoUpdate} from './ITodoUpdate';

export class TodosHandler {
  private static tableName = 'todos';
  public static connection = new SqlDbProvider<RowDataPacket, OkPacket>({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'node_sql',
  });
  public static async find(id: number): Promise<Todo | null> {
    const response: RowDataPacket[] = await this.connection.get(`select * from ${this.tableName} where id = ${id}`);
    return response.length ? new Todo(response[0].title, stringToBoolean(response[0].completed), response[0].id) : null;
  }
  public static async findAll(): Promise<Todo[] | null> {
    const response: RowDataPacket[] = await this.connection.get(`select * from ${this.tableName}`);
    return response.length ? response.map((el: RowDataPacket) => new Todo(el.title, stringToBoolean(el.completed), el.id)) : null;
  }
  public static async remove(id: number): Promise<boolean> {
    const response: OkPacket = await this.connection.put(`delete from ${this.tableName} where id = ${id}`);
    return !!response.affectedRows;
  }
  public static async killAll(): Promise<boolean> {
    const response: OkPacket = await this.connection.put(`delete from ${this.tableName}`);
    return !!response.affectedRows;
  }
  public static async add(todo: Todo): Promise<boolean> {
    const response: OkPacket = await this.connection.put(`insert into ${this.tableName} (title, completed) values ('${todo.title}', ${todo.completed})`);
    return !!response.affectedRows;
  }
  public static async update(id: number, updateData: ITodoUpdate): Promise<boolean> {
    const keys = Object.keys(updateData);
    const response:OkPacket = await this.connection.put(`update ${this.tableName} ${objectFieldToUpdateQuery(keys, updateData)} where id = ${id}`);
    return !!response.affectedRows;
  }
  public static async updateAll(ids: string[], completed: string[] | []): Promise<boolean> {
    let req = `update ${this.tableName} set completed = case `;
    ids.forEach((id: string) => {
      req += `when id = ${id} then ${completed.some((el: string) => el === id)} `;
    });
    req += 'end;';
    const response:OkPacket = await this.connection.put(req);
    return !!response.affectedRows;
  }
}

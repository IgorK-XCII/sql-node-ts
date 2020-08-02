export interface IDatabase<T> {
    query: (request: string, values?: Record<string, unknown>) => Promise<T>;
}
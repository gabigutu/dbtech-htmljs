export interface IRequestService<T> {
    getAll(url: string): Promise<T[]>;
    get(url: string, id: number): Promise<T>;
}
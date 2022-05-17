export interface IRequestService<T> {
    getAll(url: string): Promise<T[]>;
}
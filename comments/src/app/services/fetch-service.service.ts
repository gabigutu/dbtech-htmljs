import { IRequestService } from './irequest-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchRequestService<T> implements IRequestService<T> {

  constructor() { }

  // Move this in another place (too tight coupled)
  async getAllNo(url: string): Promise<Number> {
    return await fetch(url).then(response => {
      return Number(response.headers.get('x-total-count'));
    })
  }
  
  async getAll(url: string): Promise<T[]> {
    const response = await fetch(url);
    return response.json();
  }

  async get(url: string, id: number): Promise<T> {
    const fullUrl = url + '/' + id;
    const response = await fetch(fullUrl);
    return response.json();
  }
  
}

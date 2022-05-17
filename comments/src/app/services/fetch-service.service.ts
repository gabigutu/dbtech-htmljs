import { IRequestService } from './irequest-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchServiceService<T> implements IRequestService<T> {

  constructor() { }

  async getAll(url: string): Promise<T[]> {
    const response = await fetch(url);
    return response.json();
  }

}

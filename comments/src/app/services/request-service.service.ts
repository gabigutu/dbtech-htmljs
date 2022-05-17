import { Injectable } from '@angular/core';
import axios from 'axios';
import { IRequestService } from './irequest-service';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService<T> implements IRequestService<T> {

  constructor() {
  }

  async getAll(url: string): Promise<T[]> {
    const response = await axios.get(url);
    return response.data;
  }

}

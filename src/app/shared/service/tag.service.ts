import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TagService {

  constructor(
    private apiService: ApiService
  ) { }

  getAll(): Observable<string> {
    return this.apiService.get("/tags")
      .map(data => data.tags);
  }

}

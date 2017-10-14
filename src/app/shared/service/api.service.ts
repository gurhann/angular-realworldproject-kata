import { environment } from './../../../environments/environment';
import { JwtService } from './jwt.service';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ApiService {

  constructor(
    private http: Http,
    private jwtService: JwtService
  ) { }

  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    if (this.jwtService.getToken()) {
      headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
    }
    return new Headers(headersConfig);
  }

  private formatErrors(error: any) {
    return Observable.throw(error.json());
  }

  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    const opt = new RequestOptions({
      headers: this.setHeaders(),
      params: params
    });
    return this.http.get(`${environment.api_url}${path}`, opt)
      .catch(this.formatErrors)
      .map((resp: Response) => resp.json());
  }

  put(path: string, body: Object = {}): Observable<any> {
    const opt = new RequestOptions({
      headers: this.setHeaders()
    });
    return this.http.put(`${environment.api_url}${path}`, body, opt)
      .catch(this.formatErrors)
      .map((resp: Response) => resp.json());
  }

  post(path: string, body: Object = {}): Observable<any> {
    const opt = new RequestOptions({
      headers: this.setHeaders()
    });
    return this.http.post(`${environment.api_url}${path}`, body, opt)
      .catch(this.formatErrors)
      .map((resp: Response) => resp.json());
  }

  delete(path: string): Observable<any> {
    const opt = new RequestOptions({
      headers: this.setHeaders()
    });
    return this.http.delete(`${environment.api_url}${path}`, opt)
      .catch(this.formatErrors)
      .map((resp: Response) => resp.json());
  }
}

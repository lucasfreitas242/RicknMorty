import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'https://rickandmortyapi.com/api/character/'

  constructor(private httpClient: HttpClient) { }

  public get<Response>(id: string): Observable<Response> {
    return this.httpClient.get<Response>(this.url + id);
  }
}

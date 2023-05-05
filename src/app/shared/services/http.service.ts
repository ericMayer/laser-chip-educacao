import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  /**
   * Requisição post do HttpClient
   *
   * @param url endpoint da API
   * @param data objeto que vai ser enviado
   * @param SendType tipo do objeto a ser enviado, por exemplo Login
   * @param ReturnType tipo do objeto que vai retornar, por exemplo Usuario
   *
   */
  public post<SendyType, ReturnType>(url: string, data: SendyType): Observable<ReturnType> {
    return this.http.post<ReturnType>(url, data);
  }

  /**
   * Requisição get do HttpClient
   *
   * @param {{}} url endpoint da API
   * @param {{}} options parâmetros para ser enviado no get
   *
   *
   */
  public get<T>(url: string, options?: any): Observable<any> {
    return this.http.get<T>(url, options).pipe(take(1));
  }
}

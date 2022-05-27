import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TraductorService {
  constructor(private _http: HttpClient) {}
  public getLanguajes(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        'X-RapidAPI-Key': 'e75837789bmsh77e88286ea7a796p10ddd9jsn418e5d7ac9aa',
      }),
    };
    return this._http.get(
      'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
      httpOptions
    );
  }
  public translateText(
    source: string,
    target: string,
    text: string
  ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        'X-RapidAPI-Key': 'e75837789bmsh77e88286ea7a796p10ddd9jsn418e5d7ac9aa',
      }),
    };
    const body = new HttpParams()
      .set('q', text)
      .set('target', target)
      .set('source', source);
    return this._http.post(
      'https://google-translate1.p.rapidapi.com/language/translate/v2',
      body,
      httpOptions
    );
  }
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DivisaService {
  constructor(private readonly _http: HttpClient) {}

  public getlist(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currencyscoop.p.rapidapi.com',
        'X-RapidAPI-Key': 'e75837789bmsh77e88286ea7a796p10ddd9jsn418e5d7ac9aa',
      }),
    };
    const _url = 'https://currencyscoop.p.rapidapi.com/currencies';
    return this._http.get(_url, httpOptions);
  }
  public translateText(
    to: string,
    from: string,
    value: number
  ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host':
          'community-neutrino-currency-conversion.p.rapidapi.com',
        'X-RapidAPI-Key': 'e75837789bmsh77e88286ea7a796p10ddd9jsn418e5d7ac9aa',
      }),
    };
    const body = new HttpParams()
      .set('to-type', to)
      .set('from-type', from)
      .set('from-value', value);
    return this._http.post(
      'https://community-neutrino-currency-conversion.p.rapidapi.com/convert',
      body,
      httpOptions
    );
  }
}

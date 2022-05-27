import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  constructor(private readonly _http: HttpClient) {}

  public getPeliculas(
    page: number,
    size: number,
    search: string
  ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
        'X-RapidAPI-Key': 'e75837789bmsh77e88286ea7a796p10ddd9jsn418e5d7ac9aa',
      }),
    };
    const _url =
      'https://anime-db.p.rapidapi.com/anime' +
      '?page=' +
      page +
      '&size=' +
      size +
      '&search=' +
      search;
    return this._http.get(_url, httpOptions);
  }
}

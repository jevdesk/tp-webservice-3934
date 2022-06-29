import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QrappService {
  xHost = 'qr-generator-api.p.rapidapi.com';
  xKey = 'e75837789bmsh77e88286ea7a796p10ddd9jsn418e5d7ac9aa';
  urlapi = 'https://qr-generator-api.p.rapidapi.com/api/qrcode/generate';
  contentType = 'application/x-www-form-urlencoded';
  // pParams = 'languages';

  constructor(private _http: HttpClient) {}

  public traerQr(vcontent: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': this.xHost,
        'X-RapidAPI-Key': this.xKey,
      }),
    };
    const body = new HttpParams();

    return this._http.get(this.urlapi + '?text=' + vcontent, httpOptions);
  }
}
/*encodedParams.append("bg-color", "#ffffff");
encodedParams.append("fg-color", "#000000");
encodedParams.append("height", "128");
encodedParams.append("width", "128");
encodedParams.append("content", "http://www.neutrinoapi.com");

 method: 'POST',
  url: 'https://neutrinoapi-qr-code.p.rapidapi.com/qr-code',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'e75837789bmsh77e88286ea7a796p10ddd9jsn418e5d7ac9aa',
    'X-RapidAPI-Host': 'neutrinoapi-qr-code.p.rapidapi.com'
  },
  data: encodedParams




*/

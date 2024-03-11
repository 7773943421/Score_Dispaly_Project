import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LetestNewsService {

newsApi='https://feedapi.onlyscore.live/score/getCricNews';

seriesList='https://feedapi.onlyscore.live/score/seriesList';

constructor(private http: HttpClient) {}

getMatcheNews():Observable<any> {
  return this.http.get<any>(this.newsApi);
}

getSeriesList():Observable<any> {
  return this.http.get<any>(this.seriesList);
}

}

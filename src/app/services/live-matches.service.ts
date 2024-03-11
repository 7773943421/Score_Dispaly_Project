import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveMatchesService {

   url = 'https://feedapi.onlyscore.live/score/liveMatchesList';

  constructor(private http: HttpClient) { }


  getLiveMatches():Observable<any>{
    return this.http.get<any>(this.url);
  }
  
}

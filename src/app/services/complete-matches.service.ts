import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompleteMatchesService {

   apiUrl = 'https://feedapi.onlyscore.live/score/completeMatchesList';
   url = "https://feedapi.onlyscore.live/score/fullScorecard";
   aurl = "https://feedapi.onlyscore.live/score/squadsPlayers" 

  constructor(private http: HttpClient) {}

  getMatchesList():Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }



  getFullScorecard(eventId: string) {
    // console.log("From Service data",eventId);  
       let requestBody = {
      eventId: eventId
    };
    return this.http.post(this.url, requestBody);    
  }

  getFullSquads(eventId: string) {
    // console.log("From Service data",eventId);  
       let requestBody = {
      eventId: eventId
    };
    return this.http.post(this.aurl, requestBody);    
  }
  
}  
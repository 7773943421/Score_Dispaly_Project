import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleMatchesListService {

  apiUrl = 'https://feedapi.onlyscore.live/score/scheduleMatchesList';

  constructor(private http: HttpClient) { }

  public getScheduleMatchesList():Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}

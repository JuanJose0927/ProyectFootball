import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  callTeams(apiUrl: string): Observable<any> {
    return this.http.get<any>(apiUrl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LatestmatchsService {


  constructor(private htpp: HttpClient) { }

  callLatestMatches(apiUrl : string): Observable<any>{
    return this.htpp.get<any>(apiUrl)
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl = "https://www.thesportsdb.com/api/v1/json/3/all_countries.php";
  constructor(private htt: HttpClient) { }
  callCountries(): Observable<any> {
    return this.htt.get<any>(this.baseUrl);
  }
}

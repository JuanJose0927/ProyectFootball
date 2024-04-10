import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService { 

  constructor(private http: HttpClient){}

  callEquipments(apiUrl: string): Observable<any>{
    return this.http.get<any>(apiUrl);
  }

}

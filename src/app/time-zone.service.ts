import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeZoneService {

  constructor(private http:HttpClient) {}

   getData(){
     let url="z57yb0rrik.execute-api.eu-central-1.amazonaws.com";
     return this.http.get(url);
   }
}

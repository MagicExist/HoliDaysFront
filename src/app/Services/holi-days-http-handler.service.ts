import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoliDaysHttpHandlerService {
  constructor(private Client:HttpClient) { }
  public ValidateHoliDay(date:string):Observable<any>{
    const url = "https://localhost:7235/Api/IsHoliday/"+date
    console.log(url)
    return this.Client.get<any>(url)
  }
}

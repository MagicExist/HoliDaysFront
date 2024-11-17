import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HoliDayClass } from '../models/holi-day-class';

@Injectable({
  providedIn: 'root'
})
export class HoliDaysHttpHandlerService {

  public HoliDaysByYearList:HoliDayClass[] = []

  constructor(private Client:HttpClient) { }

  public ValidateHoliDay(date:string[]):Observable<any>{
    const url = "https://localhost:7235/Api/festivos/verificar/"+date[0] + "/" + date[1] + "/" + date[2]
    console.log(url)
    return this.Client.get<any>(url)
  }

  public GetHoliDaysByYear(year:string):Observable<any>{
    const url = "https://localhost:7235/Api/festivos/obtener/"+year
    return this.Client.get<any>(url)
  }

}

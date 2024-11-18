import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HoliDayClass } from '../models/holi-day-class';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HoliDaysHttpHandlerService {

  public HoliDaysByYearList:HoliDayClass[] = []

  constructor(private Client:HttpClient) { }

  public ValidateHoliDay(date:string[]):Observable<any>{
    const url = `${environment.apiBase}/festivos/verificar/${date[0]}/${date[1]}/${date[2]}`
    console.log(url)
    return this.Client.get<any>(url)
  }

  public GetHoliDaysByYear(year:string):Observable<any>{
    const url = `${environment.apiBase}/festivos/obtener/${year}`
    return this.Client.get<any>(url)
  }

  //variable de ambiente y
}

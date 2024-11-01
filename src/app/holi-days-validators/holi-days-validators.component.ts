import { Component,ViewChild,ElementRef } from '@angular/core';
import { HoliDaysHttpHandlerService } from '../Services/holi-days-http-handler.service';
import { HoliDayClass } from '../models/holi-day-class';
import { TemplateBindingParseResult } from '@angular/compiler';

@Component({
  selector: 'app-holi-days-validators',
  standalone: true,
  imports: [],
  templateUrl: './holi-days-validators.component.html',
  styleUrl: './holi-days-validators.component.css'
})
export class HoliDaysValidatorsComponent {

  @ViewChild('validateDateInput') validateDateInput!:ElementRef;
  @ViewChild('yearInput') yearInput!:ElementRef;

  constructor(private HoliDayHttpClientService:HoliDaysHttpHandlerService){}

  public ValidateHoliDay(){
    const selectedDate = this.validateDateInput.nativeElement.value;
    this.HoliDayHttpClientService.ValidateHoliDay(selectedDate).subscribe({
      next: (response) => {
        alert(response.message)
      },
      error: (error) =>{
        console.log("Ocurrio un Error")
        console.error(error)
      }
    })
  }

  GetHoliDaysByYear(){
    const yearSelected = this.yearInput.nativeElement.value
    this.HoliDayHttpClientService.GetHoliDaysByYear(yearSelected).subscribe({
      next: (response) => {
        this.HoliDayHttpClientService.HoliDaysByYearList.length = 0 //We clean up the array in each request
        for(let holiday of response){
          let holidayClass = new HoliDayClass(holiday.nombre,holiday.dia,holiday.mes,yearSelected)
          this.HoliDayHttpClientService.HoliDaysByYearList.push(holidayClass)
        }
      },
      error: (error)=>{
        console.error(error)
      }
    })
  }
}

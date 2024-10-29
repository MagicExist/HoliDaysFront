import { Component,ViewChild,ElementRef } from '@angular/core';
import { HoliDaysHttpHandlerService } from '../Services/holi-days-http-handler.service';

@Component({
  selector: 'app-holi-days-validators',
  standalone: true,
  imports: [],
  templateUrl: './holi-days-validators.component.html',
  styleUrl: './holi-days-validators.component.css'
})
export class HoliDaysValidatorsComponent {

  @ViewChild('validateDateInput') validateDateInput!:ElementRef;

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
}

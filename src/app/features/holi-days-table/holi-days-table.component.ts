import { Component } from '@angular/core';
import { HoliDaysHttpHandlerService } from '../Services/holi-days-http-handler.service';
import { HoliDayClass } from '../../core/holi-day-class';

@Component({
  selector: 'app-holi-days-table',
  standalone: true,
  imports: [],
  templateUrl: './holi-days-table.component.html',
  styleUrl: './holi-days-table.component.css'
})
export class HoliDaysTableComponent {
  constructor(public HoliDayHttpClientService:HoliDaysHttpHandlerService){}
}

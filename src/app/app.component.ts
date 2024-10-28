import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HoliDaysValidatorsComponent } from './holi-days-validators/holi-days-validators.component';
import { HoliDaysTableComponent } from './holi-days-table/holi-days-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HoliDaysValidatorsComponent,HoliDaysTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HoliDaysFront';
}

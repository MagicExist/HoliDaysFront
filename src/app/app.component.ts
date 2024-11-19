import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HoliDaysValidatorsComponent } from './features/holi-days-validators/holi-days-validators.component';
import { HoliDaysTableComponent } from './features/holi-days-table/holi-days-table.component';
import { NavBarComponent } from './features/nav-bar/nav-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HoliDaysValidatorsComponent,HoliDaysTableComponent,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HoliDaysFront';  
}

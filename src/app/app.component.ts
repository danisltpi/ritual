import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { RoutineCardComponent } from './routine-card/routine-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoutineCardComponent, OverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ritual';
}

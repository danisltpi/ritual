import { Component } from '@angular/core';
import { RoutineCardComponent } from '../routine-card/routine-card.component';
import { Card } from '../util/card';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [RoutineCardComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  routineCards: Card[] = [
    { title: 'Morning Routine' },
    { title: 'Evening Routine' },
  ];
}

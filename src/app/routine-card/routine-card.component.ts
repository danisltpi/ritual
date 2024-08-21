import { Component, Input } from '@angular/core';
import { Card } from '../util/card';

@Component({
  selector: 'app-routine-card',
  standalone: true,
  imports: [],
  templateUrl: './routine-card.component.html',
  styleUrl: './routine-card.component.scss',
})
export class RoutineCardComponent {
  @Input() card: Card | undefined;
}

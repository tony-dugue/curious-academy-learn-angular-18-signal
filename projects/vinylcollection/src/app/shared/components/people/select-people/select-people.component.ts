import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'tdu-select-people',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './select-people.component.html',
  styleUrl: './select-people.component.css',
})
export class SelectPeopleComponent {
  private readonly service = inject(PeopleService);

  item$ = this.service.getAll();
}

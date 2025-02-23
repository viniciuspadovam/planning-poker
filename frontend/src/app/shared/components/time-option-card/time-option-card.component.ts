import { Component, Input } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-time-option-card',
  imports: [],
  templateUrl: './time-option-card.component.html',
  styleUrl: './time-option-card.component.css'
})
export class TimeOptionCardComponent {

  @Input()
  public value!: number;

  constructor(private userService: UserService) {}

  select(value: number) {
    this.userService.setCardSeletion(value);
  }

}

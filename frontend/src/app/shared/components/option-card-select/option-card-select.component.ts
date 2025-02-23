import { Component, Input } from '@angular/core';
import { TimeOptionCardComponent } from "../time-option-card/time-option-card.component";
import { SelectionType } from '../../../core/model/dashboard';

@Component({
  selector: 'app-option-card-select',
  imports: [TimeOptionCardComponent],
  templateUrl: './option-card-select.component.html',
  styleUrl: './option-card-select.component.css'
})
export class OptionCardSelectComponent {

  // hours selection type: fibonacci; days;
  @Input()
  public type!: SelectionType;
  public typeOfOptions: { fib: Array<number>, days: Array<number> } = {
    fib: [1, 2, 3, 5, 8, 13, 21, 34],
    days: [1, 2, 4, 8, 16, 24, 32]
  }

}

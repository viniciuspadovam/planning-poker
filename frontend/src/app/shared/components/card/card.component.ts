import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { FlipCardDirective } from '../../directives/flip-card.directive';
import { CircleHelp, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-card',
  imports: [CommonModule, FlipCardDirective, LucideAngularModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  animations: [
    trigger('flipAnimation', [
      state('default', style({ transform: 'rotateY(180deg)' })),
      state('flipped', style({ transform: 'rotateY(0deg)' })),
      transition('default <=> flipped', [
        animate('0.6s ease-in-out')
      ])
    ])
  ]
})
export class CardComponent {
  
  @ViewChild(FlipCardDirective)
  public flipCardDirective!: FlipCardDirective;
  public isFlipped = true;
  @Input()
  public value: number | undefined;
  public helpIcon = CircleHelp;

  flipTo(state: boolean) {
    if(this.value) {
      this.isFlipped = state;
      this.flipCardDirective.setFlipState(state);
    }
  }

}

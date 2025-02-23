import { AfterViewInit, Component, Directive, Input, ViewChild } from '@angular/core';
import { SocketService } from '../../../core/services/socket.service';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FlipCardDirective } from '../../directives/flip-card.directive';

@Component({
  selector: 'app-card',
  imports: [CommonModule, FlipCardDirective],
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
export class CardComponent implements AfterViewInit {
  
  @ViewChild(FlipCardDirective)
  public flipCardDirective!: FlipCardDirective;
  public isFlipped = true;
  @Input()
  public value: number | undefined;

  ngAfterViewInit() {
    if(this.value) {
      this.flipCardDirective.setFlipState(this.isFlipped);
    }
  }

  flipTo(state: boolean) {
    if(this.value) {
      this.isFlipped = state;
      this.flipCardDirective.setFlipState(state);
    }
  }

}

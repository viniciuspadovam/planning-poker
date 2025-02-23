import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[flipableCard]'
})
export class FlipCardDirective {

  @Input()
  isFlipped = true;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  setFlipState(flipped: boolean) {
    this.isFlipped = flipped;
    const transformValue = this.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
    this.renderer.setStyle(this.el.nativeElement, 'transform', transformValue);
  }

}

import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  constructor(private ele: ElementRef, private render2: Renderer2) {
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'red');
  }

  @HostBinding('style.backgroundColor') bgColor: string = 'aqua';

  // rê chuột vào
  @HostListener('mouseenter') SuKienHover() {
    // this.render2.setStyle(this.ele.nativeElement, 'background-color', 'yellow');
    this.ele.nativeElement.style.backgroundColor = 'yellow';
  }
  // rê chuột ra
  @HostListener('mouseleave') SuKienLeave() {
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'blue');
  }
}

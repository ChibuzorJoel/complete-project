import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(element: ElementRef, renderer: Renderer2) { }
  @HostBinding('style.backgroundColor') backgroundColor: string = 'red';
  @HostBinding('style.color') color: string = 'white';
  @HostListener('mouseenter') OnMouseEnter(){
    this.backgroundColor = 'darkred';
    this.color = 'white';
    // this.border = 'purple 3px solid';
  }
  @HostListener('mouseout') OnMouseOut(){
    this.backgroundColor = 'darkslategrey';
    this.color = 'pink';
    // this.border = '#28282B px solid';
  }

}

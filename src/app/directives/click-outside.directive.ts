import { Directive, HostListener, Output, EventEmitter, ElementRef } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  @Output() clickOutside: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  clickHandler(el: HTMLElement) {
    const isClickedInside = this.elementRef.nativeElement.contains(el);
    if (!isClickedInside) {
      this.clickOutside.emit(null);
    }
  }
}

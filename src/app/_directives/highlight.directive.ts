import { Directive, OnChanges, Input, Renderer2, ElementRef } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() key = "";
  @Input() content = "";
  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngOnChanges() {
    if (!this.content) {
      return;
    }
    if (!this.key || !this.key.length) {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.content);
      return;
    }
    this.renderer.setProperty(
      this.el.nativeElement,
      'innerHTML',
      this.getFormattedText()
    );
  }
  getFormattedText() {
    const re = new RegExp(`(${this.key})`, 'gi');
    return this.content.replace(re, `<span class="highlightText">$1</span>`);
  }
}
import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
})
export class HighlightCompletedTodoDirective implements OnChanges {
  @Input('appHighlightCompletedTodo') isComplete: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isComplete']) {
      this.updateStyles();
    }
  }

  private updateStyles(): void {
    if (this.isComplete) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'textDecoration',
        'line-through'
      );
      this.renderer.setStyle(
        this.el.nativeElement,
        'backgroundColor',
        '#d3f9d8'
      );
      this.renderer.setStyle(this.el.nativeElement, 'color', '#6c757d');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'textDecoration', 'none');
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#fff');
      this.renderer.setStyle(this.el.nativeElement, 'color', '#000');
    }
  }
}

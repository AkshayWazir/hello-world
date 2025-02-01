import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count = signal(0);

  updateCount(val: number, reset: boolean) {
    if (reset) {
      this.count.set(0);
    } else {
      this.count.update((old) => old + val);
    }
  }
}

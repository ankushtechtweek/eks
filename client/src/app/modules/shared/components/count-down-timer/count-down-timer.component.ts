import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
})
export class CountDownTimerComponent {
  @Input() timer = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  @Input() expired!: boolean;
}

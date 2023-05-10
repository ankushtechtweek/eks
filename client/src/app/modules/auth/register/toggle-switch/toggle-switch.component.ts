import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ToggleSwitchComponent {
  @Output() subscriptionType: EventEmitter<string> = new EventEmitter();
  public type: boolean = true;

  public onChange() {
    this.type
      ? this.subscriptionType.emit('yearly')
      : this.subscriptionType.emit('monthly');
  }
}

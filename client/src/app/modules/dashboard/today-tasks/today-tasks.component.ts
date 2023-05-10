import { Component } from '@angular/core';
import { CurrentUserService } from '../../_services/current-user.service';

@Component({
  selector: 'app-today-tasks',
  templateUrl: './today-tasks.component.html',
  styleUrls: ['./today-tasks.component.scss'],
})
export class TodayTasksComponent {
  today = new Date();
  constructor(public currenUser: CurrentUserService) {}

  public get getDayType() {
    let hour = new Date().getHours();
    return (
      'Good ' +
      ((hour < 12 && 'Morning') || (hour < 18 && 'Afternoon') || 'Evening')
    );
  }
}

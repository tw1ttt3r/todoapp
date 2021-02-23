import { Component, Input, OnInit } from '@angular/core';
import { MonthsName } from 'src/app/enums/months-name.enum';
import { StatusActivity } from 'src/app/enums/status-activity.enum';
import { Activity } from 'src/app/models/activity';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.scss']
})
export class ActivityListItemComponent implements OnInit {

  @Input() activity: Activity;
  statusActivity = StatusActivity
  monthsName = MonthsName;

  constructor(private activityService: ActivitiesService) { }

  ngOnInit(): void {
  }

  changeStatus(id: number, status: number) {
    this.activityService.updateActivity(id, status);
  }

  getDateRegistro(time: number) {
    const fecha = new Date(time);
    return `${fecha.getDate()}-${this.monthsName[fecha.getMonth()]}-${fecha.getFullYear()} a las ${fecha.getHours() < 12 ? `0${fecha.getHours()}` : fecha.getHours()}:${fecha.getMinutes() < 10 ? `0${fecha.getMinutes()}` : fecha.getMinutes()}:${fecha.getSeconds() < 10 ? `${fecha.getSeconds()}` : fecha.getSeconds() } ${fecha.getHours() < 12 ? `am` : `pm`}`
  }

}

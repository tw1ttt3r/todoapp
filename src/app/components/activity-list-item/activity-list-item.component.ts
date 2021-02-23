import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private activityService: ActivitiesService) { }

  ngOnInit(): void {
  }

  changeStatus(id: number, status: number) {
    this.activityService.updateActivity(id, status);
  }

  getDateRegistro(time: number) {
    return this.activityService.timeToString(time);
  }

}

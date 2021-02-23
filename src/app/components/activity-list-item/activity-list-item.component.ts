import { Component, Input, OnInit } from '@angular/core';
import { StatusActivity } from 'src/app/enums/status-activity.enum';
import { Activity } from 'src/app/models/activity';

@Component({
  selector: 'app-activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.scss']
})
export class ActivityListItemComponent implements OnInit {

  @Input() activity: Activity;
  statusActivity = StatusActivity

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus() {
    alert('desde changeStatus');
  }

}

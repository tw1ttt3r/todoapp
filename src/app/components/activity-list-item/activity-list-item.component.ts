import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatusActivity } from '../../enums/status-activity.enum';
import { Activity } from '../../models/activity';

@Component({
  selector: 'app-activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.scss']
})
export class ActivityListItemComponent implements OnInit {

  @Input() activity: Activity;
  statusActivity = StatusActivity
  @Output() changeStatus = new EventEmitter<{ id: number, status: number }>();

  constructor() { }

  ngOnInit(): void {
  }

  change(id: number, status: number): void {
    this.changeStatus.emit({ id, status });
  }

}

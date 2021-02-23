import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Activity } from '../../models/activity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  @Input() activities: Activity[];
  @Input() version: string;
  @Output() emptyData = new EventEmitter();
  @Output() itemChangeStatus = new EventEmitter<{ id: number, status: number }>();

  constructor() { }

  ngOnInit(): void {
  }

  empty(): void {
    this.emptyData.emit();
  }

  statusChange({ id, status }): void {
    this.itemChangeStatus.emit({ id, status });
  }

}

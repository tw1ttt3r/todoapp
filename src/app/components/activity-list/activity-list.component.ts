import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Activity } from 'src/app/models/activity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  @Input() activities: Activity[];
  @Input() version: string;
  @Output() emptyData = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  empty() {
    this.emptyData.emit();
  }

}

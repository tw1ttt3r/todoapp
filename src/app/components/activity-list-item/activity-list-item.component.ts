import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.scss']
})
export class ActivityListItemComponent implements OnInit {

  @Input() activity: any;

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus() {
    alert('desde changeStatus');
  }

}

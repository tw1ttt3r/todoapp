import { AfterContentChecked, Component } from '@angular/core';
import { Activity } from './models/activity';
import { ActivitiesService } from './services/activities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked {

  activitiesService: Activity[];

  constructor(private activityService: ActivitiesService) {}

  ngOnInit() { }

  ngAfterContentChecked() {
    this.activitiesService = this.activityService.getAllActivities();
  }
}

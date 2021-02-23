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
  version: string;

  constructor(private activityService: ActivitiesService) {}

  ngOnInit() {
    this.activityService.searchDataStorage();
  }

  ngAfterContentChecked() {
    this.activitiesService = this.activityService.getAllActivities();
    this.version = this.activityService.lastVersion;
  }

  deleteData() {
    this.activityService.deleteDataStorage();
  }

}

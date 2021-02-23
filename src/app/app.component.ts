import { AfterContentChecked, Component } from '@angular/core';
import { ActivitiesService } from './services/activities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked {

  activitiesService: any[];

  constructor(private activityService: ActivitiesService) {}

  ngOnInit() { }

  ngAfterContentChecked() {
    this.activitiesService = this.activityService.getAllActivities();
  }
}

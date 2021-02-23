import { AfterContentChecked, Component, ViewChild } from '@angular/core';
import { Activity } from './models/activity';
import { ActivitiesService } from './services/activities.service';
import { RegisterComponent } from './components/register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked {

  activitiesService: Activity[];
  version: string;

  @ViewChild('register', { static: true }) registerEl: RegisterComponent;

  constructor(private activityService: ActivitiesService) {}

  ngOnInit(): void {
    this.activityService.searchDataStorage();
  }

  ngAfterContentChecked(): void {
    this.activitiesService = this.activityService.getAllActivities()
      .reduce( (p, c) => {
        p = [...p, {...c, register: this.activityService.timeToString(c.register), lastUpdate: c.hasOwnProperty('lastUpdate') ? this.activityService.timeToString(c.lastUpdate) : undefined}]
        return p;
      }, []);
    this.version = this.activityService.lastVersion;
  }

  deleteData(): void {
    this.activityService.deleteDataStorage();
  }

  registerActivity({ name, description }): void {
    if (this.activityService.existNameActivity(name)) {
      alert('Intento de Registro de Actividad Repetido');
      return;
    }
    this.activityService.registerActivity(name, description);
    this.registerEl.cleanControls();
  }

  updateStatus({ id, status }): void {
    this.activityService.updateActivity(id, status);
  }

}

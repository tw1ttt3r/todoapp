import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { ActivityListItemComponent } from './components/activity-list-item/activity-list-item.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ActivitiesService } from './services/activities.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ActivityListItemComponent,
    ActivityListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ActivitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

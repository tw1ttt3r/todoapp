import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { ActivityListItemComponent } from './components/activity-list-item/activity-list-item.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ActivityListItemComponent,
    ActivityListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

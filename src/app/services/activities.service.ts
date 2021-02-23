import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  activities: Activity[] = [];

  constructor() { }

  registerActivity(name: string, description: string): void {
    this.activities = [
      ...this.activities,
      {
        name,
        description,
        status: 0,
        register: Date.now(),
      }
    ];
  }

  getAllActivities(): Activity[] {
    return this.activities;
  }
}

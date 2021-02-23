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
        id: this.activities.length, 
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

  updateActivity(id: number, status: number) {
    this.activities[id] = { ...this.activities[id], status, lastUpdate: Date.now()}
  }

  existNameActivity(name: string): boolean {
    return this.activities.filter( a => a.name === name).length === 0 ? false : true;
  }
}

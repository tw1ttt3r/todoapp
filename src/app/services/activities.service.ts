import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  activities: any[] = [];

  constructor() { }

  registerActivity(name: string, description: string) {
    this.activities = [
      ...this.activities,
      {
        name,
        description,
        status: 'Pendiente',
        register: Date.now(),
        lastUpdate: null
      }
    ];
  }

  getAllActivities() {
    return this.activities;
  }
}

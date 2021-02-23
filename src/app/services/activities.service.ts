import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';
import { MonthsName } from 'src/app/enums/months-name.enum';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  activities: Activity[] = [];
  lastUpdate: number = 0;
  monthsName = MonthsName;
  db = 'todoAppData';

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
    this.saveDataStorage();
  }

  getAllActivities(): Activity[] {
    return this.activities.sort((a, b) => b.register - a.register);
  }

  updateActivity(id: number, status: number): void {
    this.activities[id] = { ...this.activities[id], status, lastUpdate: Date.now()}
    this.saveDataStorage();
  }

  existNameActivity(name: string): boolean {
    return this.activities.filter( a => a.name === name).length === 0 ? false : true;
  }

  searchDataStorage(): void {
    if (!!localStorage.getItem(this.db)) {
      const { update, data } = JSON.parse(localStorage.getItem(this.db));
      this.lastUpdate = update;
      this.activities = data;
    }
  }

  saveDataStorage() {
    const update = Date.now();
    localStorage.setItem(this.db, JSON.stringify({update, data: this.activities}));
    this.lastUpdate = update;
  }

  deleteDataStorage() {
    localStorage.removeItem(this.db);
    this.activities = [];
    this.lastUpdate = 0;
  }

  get lastVersion(): string {
    if (this.lastUpdate === 0) {
      return '----'
    }
    return this.timeToString(this.lastUpdate);
  }

  timeToString(time: number): string {
    const fecha = new Date(time);
    return `${fecha.getDate()}-${this.monthsName[fecha.getMonth()]}-${fecha.getFullYear()} a las ${fecha.getHours() < 12 ? `0${fecha.getHours()}` : fecha.getHours()}:${fecha.getMinutes() < 10 ? `0${fecha.getMinutes()}` : fecha.getMinutes()}:${fecha.getSeconds() < 10 ? `0${fecha.getSeconds()}` : fecha.getSeconds() } ${fecha.getHours() < 12 ? `am` : `pm`}`
  }
}

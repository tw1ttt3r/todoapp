import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('nameActivity', { static: true } ) activityName: ElementRef<HTMLInputElement>;
  @ViewChild('descriptionActivity', { static: true } ) activityDescription: ElementRef<HTMLTextAreaElement>;

  activitiesList: any[];

  constructor() { }

  ngOnInit(): void {
    this.activitiesList = [];
  }

  saveActivity() {
    if (this.activityName.nativeElement.value !== '' && this.activityDescription.nativeElement.value != '') {
      this.activitiesList = [
        ...this.activitiesList,
        {
          name: this.activityName.nativeElement.value,
          description: this.activityDescription.nativeElement.value,
          status: 'Pendiente',
          register: Date.now(),
          lastUpdate: null
        }
      ];
      this.cleanControls();
    } else {
      alert('Datos Faltantes')
    }
  }

  cleanControls() {
    this.activityName.nativeElement.value = '';
    this.activityDescription.nativeElement.value = '';
  }

}

import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Activity } from '../../models/activity';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('nameActivity', { static: true } ) activityName: ElementRef<HTMLInputElement>;
  @ViewChild('descriptionActivity', { static: true } ) activityDescription: ElementRef<HTMLTextAreaElement>;

  @Output() activityData = new EventEmitter<Activity>();

  constructor() { }

  ngOnInit(): void { }

  saveActivity(): void {
    if (this.activityName.nativeElement.value !== '' && this.activityDescription.nativeElement.value != '') {
      this.activityData.emit({ name: this.activityName.nativeElement.value, description: this.activityDescription.nativeElement.value });
    } else {
      alert('Datos Faltantes');
    }
  }

  cleanControls(): void {
    this.activityName.nativeElement.value = '';
    this.activityDescription.nativeElement.value = '';
  }

}

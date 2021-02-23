import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('nameActivity', { static: true } ) activityName: ElementRef<HTMLInputElement>;
  @ViewChild('descriptionActivity', { static: true } ) activityDescription: ElementRef<HTMLTextAreaElement>;

  constructor(private activityService: ActivitiesService) { }

  ngOnInit(): void { }

  saveActivity(): void {
    if (this.activityName.nativeElement.value !== '' && this.activityDescription.nativeElement.value != '') {
      this.activityService.registerActivity(this.activityName.nativeElement.value, this.activityDescription.nativeElement.value);
      this.cleanControls();
    } else {
      alert('Datos Faltantes')
    }
  }

  cleanControls(): void {
    this.activityName.nativeElement.value = '';
    this.activityDescription.nativeElement.value = '';
  }

}

import { Component, OnInit } from '@angular/core';
import { TraineesService } from 'src/app/services/trainees.service';

@Component({
  selector: 'app-trainee-form',
  templateUrl: './trainee-form.component.html',
  styleUrls: ['./trainee-form.component.scss']
})
export class TraineeFormComponent implements OnInit {
  skills = [
    { id: 1, value: 'js' },
    { id: 2, value: 'html' },
    { id: 3, value: 'css' },
  ];

  constructor(public service: TraineesService) { }

  ngOnInit(): void {
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}

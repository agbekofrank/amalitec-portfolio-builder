import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TraineesService } from 'src/app/services/trainees.service';

@Component({
  selector: 'app-trainee-form',
  templateUrl: './trainee-form.component.html',
  styleUrls: ['./trainee-form.component.scss'],
})
export class TraineeFormComponent implements OnInit {
  skills = [
    { id: 1, value: 'js' },
    { id: 2, value: 'html' },
    { id: 3, value: 'css' },
  ];

  constructor(
    public service: TraineesService, 
    private fb: FormBuilder,
    private dialog: MatDialog
    ) {}
  form: any = FormGroup;

  ngOnInit(): void {}
  onSubmit() {
    const formData = new FormData();
    let form = this.service.form;
    formData.append('first_name', form.get('first_name')!.value);
    formData.append('last_name', form.get('last_name')!.value);
    formData.append('email', form.get('email')!.value);
    formData.append('password', form.get('password')!.value);
    formData.append('education', form.get('education')!.value);
    formData.append('skills', form.get('skills')!.value);
    formData.append('certifications', form.get('certifications')!.value);
    formData.append('gender', form.get('gender')!.value);
    // console.log(formData);
    this.service.addTrainee(formData).subscribe(
      resp => console.log(resp)
    )
    this.dialog.closeAll()
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}

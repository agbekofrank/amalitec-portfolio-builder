import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Trainee } from '../interfaces/trainee';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TraineeFormComponent } from '../layout/trainee-form/trainee-form.component';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TraineesService {

  private baseUrl = environment.baseUrl;
  trainee!: Trainee;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog
  ) { }

  getTrainee(id:number): Observable<Trainee>{
    return this.http.get<Trainee>(this.baseUrl+`/trainees/api/${id}/`).pipe(
      // tap(val => console.log(val.skills[0].id))
    )
  }

  getTrainees(): Observable<Trainee[]>{
    return this.http.get<Trainee[]>(this.baseUrl+`/trainees/api/`)
  }
  
  addTrainee(formData:any){
    return this.http.post(`${this.baseUrl}/trainees/api/create/` ,formData)
  }

  updateTrainee(formData:any, id:any){
    return this.http.put(`${this.baseUrl}/trainees/api/${id}/edit/`, formData);
  }
  deleteTrainee(id:any){
    return this.http.delete(`${this.baseUrl}/trainees/api/${id}/delete/`)
  }

  openTraineeModal() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '55%';
    this.dialog.open(TraineeFormComponent, dialogConfig);
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    id: new FormControl(),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    gender: new FormControl('M', Validators.required),
    certifications: new FormControl(1),
    skills: new FormControl([], Validators.required),
    education: new FormControl(1),
    startDate: new FormControl('')
  })
  initializeFormGroup(){
    this.form.setValue({
      $key: null,
      id: 1,
      first_name: '', 
      last_name: '', 
      email: '',
      password: '', 
      gender: 1, 
      certifications: [],
      skills: [], 
      education: '',
      startDate: ''
    })
  }
}

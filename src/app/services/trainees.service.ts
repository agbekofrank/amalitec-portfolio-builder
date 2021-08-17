import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Trainee } from '../interfaces/trainee';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TraineeFormComponent } from '../layout/trainee-form/trainee-form.component';

@Injectable({
  providedIn: 'root'
})
export class TraineesService {

  private url = 'http://127.0.0.1:8000/trainees/api';
  //http://127.0.0.1:8000/trainees/api/1/
  private baseUrl = environment.baseUrl;
  trainee!: Trainee;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog
  ) { }

  getTrainee(id:number): Observable<Trainee>{
    return this.http.get<Trainee>(this.baseUrl+`/trainees/api/${id}/`)
  }

  getTrainees(): Observable<Trainee[]>{
    return this.http.get<Trainee[]>(this.url)
  }
  
  addTrainee(formData:any){
    return this.http.post(`${this.url}/create/` ,formData)
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
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    gender: new FormControl('M', Validators.required),
    certifications: new FormControl(['one']),
    skills: new FormControl([], Validators.required),
    education: new FormControl(''),
    startDate: new FormControl('')
  })
  initializeFormGroup(){
    this.form.setValue({
      $key: null,
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

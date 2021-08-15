import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Trainee } from '../interfaces/trainee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraineesService {

  // private url = 'http://127.0.0.1:8000/trainees/api';
  private url = 'https://portfolioag.herokuapp.com/trainees/api/';
  trainee!: Trainee;

  constructor(
    private http: HttpClient
  ) { }

  getTrainees(): Observable<Trainee[]>{
    return this.http.get<Trainee[]>(this.url)
  }
  
  // addTrainee(formData){
  //   return this.http.post(this.url,)
  // }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    gender: new FormControl(1, Validators.required),
    certifications: new FormControl([]),
    skills: new FormControl([], Validators.required),
    education: new FormControl(''),
    startDate: new FormControl('')
  })
  initializeFormGroup(){
    this.form.setValue({
      $key: null,
      firstName: '', 
      lastName: '', 
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

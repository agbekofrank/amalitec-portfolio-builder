import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  error:any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  signup(
    username: string,
    email: string, 
    password: string, 
    password2: string,
    first_name: string,
    last_name: string
    ) {
    this.authService.signup(
      username, 
      email, 
      password, 
      password2,
      first_name,
      last_name
      ).subscribe(
      (success) => {
        console.log(success)
        this.router.navigate(['/'])
      },
      (error) => {
        this.error = error
        console.log(error)
        this.router.navigate(['/accounts/login'])

      }
    );
  }
}

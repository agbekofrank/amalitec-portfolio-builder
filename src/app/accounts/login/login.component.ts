import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe(
      (success) => {
        this.router.navigate(['/']);
        // this.notifications.openFromComponent(NotificationsComponent, {
        //   data: 'Congratulations, You successfully logged in',
        // });
      },
      error => {
        this.error = error;
        if (error.includes('400')) {
          error = 'Your password and usernames do not match, try again !';
        } else if (error.includes('500')) {
          error = 'Sorry, our servers are down a bit, try later or contact Admin !';
        } else {
          error = 'We cant figure out what is wrong now !';
        }
        // this.notifications.openFromComponent(NotificationsComponent, {
        //   data: error
        // });
      }
    );
    console.log(this.error ? this.error : '');
  }
}

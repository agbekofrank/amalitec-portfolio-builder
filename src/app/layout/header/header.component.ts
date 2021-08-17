import { Component, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EventEmitter } from '@angular/core';
// import { CreatePortfolioComponent } from 'src/app/components/create-portfolio/create-portfolio.component';
import { TraineeFormComponent } from '../trainee-form/trainee-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() togTraineeForm: EventEmitter<any> = new EventEmitter();

  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  user: any;
  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUser()
      ? JSON.parse(this.authService.getUser()!).username
      : this.authService.getUser();
  }
  createPortfolio() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '55%';
    this.dialog.open(TraineeFormComponent, dialogConfig);
  }

  logout() {
    this.authService.logout();
    this.route.navigate(['/accounts/login']);
  }
}

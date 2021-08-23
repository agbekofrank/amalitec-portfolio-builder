import { Component, Inject, OnInit, Output } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
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
    // @Inject(MAT_DIALOG_DATA) public data: {name: 'data'},
    private dialog: MatDialog,
    private authService: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getUser();
  }
  createPortfolio() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { email: 2 };
    dialogConfig.hasBackdrop = true;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';

    this.dialog.open(TraineeFormComponent, dialogConfig);
  }

  getUser() {
    this.user = this.authService.getUser()
      ? JSON.parse(this.authService.getUser()!)
      : this.authService.getUser();
  }

  logout() {
    this.authService.logout();
    this.route.navigate(['/accounts/login']);
  }
}

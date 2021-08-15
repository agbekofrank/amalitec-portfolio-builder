import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { CreatePortfolioComponent } from 'src/app/components/create-portfolio/create-portfolio.component';
import { TraineeFormComponent } from '../trainee-form/trainee-form.component';
import { TraineesComponent } from '../trainees/trainees.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  createPortfolio(){
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(TraineeFormComponent, dialogConfig);
  }
}

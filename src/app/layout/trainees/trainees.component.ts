import { Component, OnInit, ViewChild } from '@angular/core';
import { TraineesService } from 'src/app/services/trainees.service';
import { filter, finalize, delay } from 'rxjs/operators';
import { Trainee } from 'src/app/interfaces/trainee';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trainees',
  templateUrl: './trainees.component.html',
  styleUrls: ['./trainees.component.scss'],
})
export class TraineesComponent implements OnInit {
  isLoading = true;
  trainees!: Trainee[];
  data!: any;
  currentId: any;

  constructor(
    public service: TraineesService, 
    private fb: FormBuilder,
    public dialog: MatDialog,
    private route: ActivatedRoute
    ) {}

  displayedColumns: string[] = [
    'ID',
    'fname',
    'lname',
    'skills',
    'education',
    'certifications',
    'email',
    'actions',
  ];
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getTrainees();
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;
  }
  
  openDialog(action: any, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      // width: '40vw',
      data: obj,
      panelClass: 'custom-modalbox'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Add') {
        this.addTrainee(result.data);
      } else if (result.event == 'Update') {
        this.updateTrainee(result.data);
      } else if (result.event == 'Delete') {        
        this.deleteTrainee(result.data);
      }
    });
  }
  getFormData = () => {
    var d = new Date();
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
    return formData
  }
  addTrainee(trainee: any) {
    const formData = this.getFormData()
    // console.log(formData);
    this.service.addTrainee(formData).subscribe(
      resp => console.log(resp)
    )
    this.table.renderRows();
  }
  updateTrainee(trainee: Trainee) {
    const id = +this.service.form.get('id')!.value;
    const formData = this.getFormData()
    this.service.updateTrainee(formData, id).subscribe(resp => {
      console.log(resp)
    })
  }

  g(e:any){
    this.currentId =  e.target.id
  }
  deleteTrainee(e:any) {
    this.service.deleteTrainee(this.currentId).subscribe(resp => {
      console.log(resp)
    })
  }

  getTrainees(): any {
    this.service
      .getTrainees()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((data) => {
        this.data = new MatTableDataSource<Trainee>(data);
      });
  }
}

/* Static data */

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

import { Component, OnInit, ViewChild } from '@angular/core';
import { TraineesService } from 'src/app/services/trainees.service';
import { filter, finalize, delay } from 'rxjs/operators';
import { Trainee } from 'src/app/interfaces/trainee';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-trainees',
  templateUrl: './trainees.component.html',
  styleUrls: ['./trainees.component.scss'],
})
export class TraineesComponent implements OnInit {
  isLoading = true;
  trainees!: Trainee[];
  data!: Trainee[];

  constructor(public service: TraineesService) {}

  displayedColumns: string[] = ['ID', 'fname', 'lname', 'skills', 'education','email'];
  dataSource = new MatTableDataSource<Trainee>(this.data);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngOnInit(): void {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getTrainees();
  }

  // addTrainee(formData:any){
  //   this.service.addTrainee(formData)
  // }
  getTrainees(): any {
    this.service
      .getTrainees()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((data) => {
        this.data = data
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

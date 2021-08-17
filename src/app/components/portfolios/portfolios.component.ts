import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trainee } from 'src/app/interfaces/trainee';
import { TraineesService } from 'src/app/services/trainees.service';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss']
})
export class PortfoliosComponent implements OnInit {

  @Input() trainee!: Trainee

  constructor(
    private route: ActivatedRoute,
    private service: TraineesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTrainee()
  }

  getTrainee(){
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service.getTrainee(id).subscribe(
      trainee => this.trainee = trainee
    )

  }
  back(){
    this.location.back()
  }
}

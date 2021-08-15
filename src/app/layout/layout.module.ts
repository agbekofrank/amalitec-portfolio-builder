import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material/material.module';
import { ComponentsModule } from '../components/components/components.module';
import { PortfoliosComponent } from '../components/portfolios/portfolios.component';
import { CreatePortfolioComponent } from '../components/create-portfolio/create-portfolio.component';
import { TraineesComponent } from './trainees/trainees.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TraineeFormComponent } from './trainee-form/trainee-form.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    PortfoliosComponent,
    CreatePortfolioComponent,
    TraineesComponent,
    TraineeFormComponent
  ],

  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    ComponentsModule,
    ReactiveFormsModule

  ]
})
export class LayoutModule { }

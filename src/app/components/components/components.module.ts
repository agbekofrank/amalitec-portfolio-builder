import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
// import { PortfoliosComponent } from '../portfolios/portfolios.component';
import { CreatePortfolioComponent } from '../create-portfolio/create-portfolio.component';


@NgModule({
  declarations: [
    // CreatePortfolioComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }

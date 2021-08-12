import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material/material.module';
import { ComponentsModule } from '../components/components/components.module';
import { PortfoliosComponent } from '../components/portfolios/portfolios.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    PortfoliosComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class LayoutModule { }

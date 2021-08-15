import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePortfolioComponent } from '../components/create-portfolio/create-portfolio.component';
import { LayoutComponent } from './layout.component';
import { TraineesComponent } from './trainees/trainees.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'portfolios',
        loadChildren: () =>
          import('../components/components/components.module').then(
            (m) => m.ComponentsModule
          ),
      },
      {
        path: 'create-portfolio', component: CreatePortfolioComponent
      },
      {
        path: '', component: TraineesComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}

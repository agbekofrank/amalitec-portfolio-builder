import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, PreventLoggedInAccess } from '../accounts/auth.guard';
import { CreatePortfolioComponent } from '../components/create-portfolio/create-portfolio.component';
import { PortfoliosComponent } from '../components/portfolios/portfolios.component';
import { LayoutComponent } from './layout.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { TraineesComponent } from './trainees/trainees.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'accounts',
        loadChildren: () =>
          import('../accounts/accounts.module').then((m) => m.AccountsModule),
      },
      { path: 'table', component: MatTableComponent },
      {
        path: ':id',
        component: PortfoliosComponent,
      },
      {
        path: 'portfolios',
        loadChildren: () =>
          import('../components/components/components.module').then(
            (m) => m.ComponentsModule
          ),
      },
      {
        path: 'create-portfolio',
        component: CreatePortfolioComponent,
      },
      {
        path: '',
        component: TraineesComponent, //canActivate: [AuthGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}

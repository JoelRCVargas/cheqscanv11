import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'home',
    loadChildren: () => {
      return import('./pages/home/home.module').then(m => m.HomeModule);
    }
  },
  {
    path : 'checks',
    loadChildren: () => {
      return import('./pages/check/check.module').then(m => m.CheckModule);
    }
  },
  {
    path : 'checks/filters',
    loadChildren: () => {
      return import('./pages/check-filters/check-filters.module').then(m => m.CheckFiltersModule);
    }
  },
  {
    path : 'deposits',
    loadChildren: () => {
      return import('./pages/deposits/deposits.module').then(m => m.DepositsModule);
    }
  },
  {
    path : 'detail/deposits',
    loadChildren: () => {
      return import('./pages/deposits-detail/deposits-detail.module').then(m => m.DetailDepositsModule);
    }
  },
  {
    path : 'consult/deposits',
    loadChildren: () => {
      return import('./pages/deposits-consult/deposits-consult.module').then(m => m.ConsultDepositsModule);
    }
  },
  {
    path : 'config/business',
    loadChildren: () => {
      return import('./pages/config-business/config-business.module').then(m => m.ConfigBusinessModule);
    }
  },
  {
    path : 'register',
    loadChildren: () => {
      return import('./pages/register/register.module').then(m => m.RegisterModule);
    }
  },
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

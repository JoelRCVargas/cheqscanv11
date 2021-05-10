import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckFiltersComponent } from './check-filters.component';

const routes: Routes = [
    {
      path: '',
      component: CheckFiltersComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class checkFiltersRoutingModule { }
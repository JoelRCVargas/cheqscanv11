import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigBusinessComponent } from './config-business.component';

const routes: Routes = [
    {
      path: '',
      component: ConfigBusinessComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ConfigBusinessRoutingModule { }
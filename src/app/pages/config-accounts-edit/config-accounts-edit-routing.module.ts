import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigAccountsEditComponent } from './config-accounts-edit.component';

const routes: Routes = [
    {
      path: '',
      component: ConfigAccountsEditComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ConfigAccountsEditRoutingModule { }
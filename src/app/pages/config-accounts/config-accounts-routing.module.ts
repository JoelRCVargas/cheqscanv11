import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigAccountsComponent } from './config-accounts.component';

const routes: Routes = [
    {
      path: '',
      component: ConfigAccountsComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ConfigAccountsRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigBusinessEditComponent } from './config-business-edit.component';

const routes: Routes = [
    {
      path: '',
      component: ConfigBusinessEditComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ConfigBusinessEditRoutingModule { }
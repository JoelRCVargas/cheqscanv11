import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigNotifyEditComponent } from './config-notify-edit.component';

const routes: Routes = [
    {
      path: '',
      component: ConfigNotifyEditComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ConfigNotifyEditRoutingModule { }
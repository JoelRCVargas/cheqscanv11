import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigNotifyComponent } from './config-notify.component';

const routes: Routes = [
    {
      path: '',
      component: ConfigNotifyComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ConfigNotifyRoutingModule { }
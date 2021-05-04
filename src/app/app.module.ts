import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AlertDeleteComponent } from './components/alert-delete/alert-delete.component';
import { AlertSuccessComponent } from './components/alert-success/alert-success.component';
import { NgPopupsModule } from 'ng-popups';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AlertDeleteComponent,
    AlertSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    NgPopupsModule.forRoot({
      theme: 'material', // available themes: 'default' | 'material' | 'dark'
      okButtonText: 'Yes',
      cancelButtonText: 'No',
      color: '#8030c3',
      titles: {
        alert: 'Danger!',
        confirm: 'Confirmation',
        prompt: 'Website asks...'
      }
    }),
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

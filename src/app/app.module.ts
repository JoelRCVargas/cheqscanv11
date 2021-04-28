import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AlertDeleteComponent } from './components/alert-delete/alert-delete.component';
import { AlertSuccessComponent } from './components/alert-success/alert-success.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AlertDeleteComponent,
    AlertSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NotificationModule } from 'src/app/components/notification/notification.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
    declarations :[
        HomeComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HomeRoutingModule,
        NotificationModule,
        NavbarModule
    ],
    providers: [
    
    ],
})

export class HomeModule { }
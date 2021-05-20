import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { ConfigNotifyEditComponent } from './config-notify-edit.component';
import { ConfigNotifyEditRoutingModule } from './config-botify-edit-routing.module';

@NgModule({
    declarations :[
        ConfigNotifyEditComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ConfigNotifyEditRoutingModule,
        NavbarModule,
    ],
    providers: [
    
    ],
})

export class ConfigNotifyEditModule { }
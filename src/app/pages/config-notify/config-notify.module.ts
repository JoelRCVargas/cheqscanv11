import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { ConfigNotifyComponent } from './config-notify.component';
import { ConfigNotifyRoutingModule } from './config-notify-routing.module';

@NgModule({
    declarations :[
        ConfigNotifyComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ConfigNotifyRoutingModule,
        NavbarModule,
    ],
    providers: [
    
    ],
})

export class ConfigNotifyModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { ConfigBusinessRoutingModule } from './config-business-routing.module';
import { ConfigBusinessComponent } from './config-business.component';

@NgModule({
    declarations :[
        ConfigBusinessComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ConfigBusinessRoutingModule,
        NavbarModule,
    ],
    providers: [
    
    ],
})

export class ConfigBusinessModule { }
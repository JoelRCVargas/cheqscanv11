import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { ConfigComponent } from './config.component';
import { ConfigRoutingModule } from './config-routing.module';

@NgModule({
    declarations :[
        ConfigComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ConfigRoutingModule,
        NavbarModule,
    ],
    providers: [
    
    ],
})

export class ConfigModule { }
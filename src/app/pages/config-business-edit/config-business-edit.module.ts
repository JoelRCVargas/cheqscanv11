import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { ConfigBusinessEditComponent } from './config-business-edit.component';
import { ConfigBusinessEditRoutingModule } from './config-business-edit-routing.module';

@NgModule({
    declarations :[
        ConfigBusinessEditComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ConfigBusinessEditRoutingModule,
        NavbarModule,
    ],
    providers: [
    
    ],
})

export class ConfigBusinessEditModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { ConfigAccountsEditRoutingModule } from './config-accounts-edit-routing.module';
import { ConfigAccountsEditComponent } from './config-accounts-edit.component';

@NgModule({
    declarations :[
        ConfigAccountsEditComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ConfigAccountsEditRoutingModule,
        NavbarModule,
    ],
    providers: [
    
    ],
})

export class ConfigAccountsEditModule { }
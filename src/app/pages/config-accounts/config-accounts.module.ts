import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { ConfigAccountsComponent } from './config-accounts.component';
import { ConfigAccountsRoutingModule } from './config-accounts-routing.module';

@NgModule({
    declarations :[
        ConfigAccountsComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ConfigAccountsRoutingModule,
        NavbarModule,
    ],
    providers: [
    
    ],
})

export class ConfigAccountsModule { }
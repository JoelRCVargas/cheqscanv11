import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckComponent } from './check.component';
import { CheckRoutingModule } from './check-routing.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
    declarations :[
        CheckComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        CheckRoutingModule,
        NavbarModule,
        SweetAlert2Module
    ],
    providers: [
    
    ],
})

export class CheckModule { }
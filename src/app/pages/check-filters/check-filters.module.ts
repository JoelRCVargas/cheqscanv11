import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { CheckFiltersComponent } from './check-filters.component';
import { checkFiltersRoutingModule } from './chec-filters-routing.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
    declarations :[
        CheckFiltersComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        checkFiltersRoutingModule,
        NavbarModule,
        SweetAlert2Module
    ],
    providers: [
    
    ],
})

export class CheckFiltersModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckComponent } from './check.component';
import { CheckRoutingModule } from './check-routing.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
    declarations :[
        CheckComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        CheckRoutingModule,
        NavbarModule
    ],
    providers: [
    
    ],
})

export class CheckModule { }
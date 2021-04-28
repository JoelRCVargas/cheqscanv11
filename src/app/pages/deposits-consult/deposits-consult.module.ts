import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepositsConsultComponent } from './deposits-consult.component';
import { ConsultDepositsRoutingModule } from './deposits-consult-routing.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
    declarations :[
        DepositsConsultComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ConsultDepositsRoutingModule,
        NavbarModule
    ],
    providers: [
    
    ],
})

export class ConsultDepositsModule { }
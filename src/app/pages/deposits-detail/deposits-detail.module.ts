import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepositsDetailComponent } from './deposits-detail.component';
import { DetailDepositsRoutingModule } from './deposits-detail-routing.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
    declarations :[
        DepositsDetailComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        DetailDepositsRoutingModule,
        NavbarModule
    ],
    providers: [
    
    ],
})

export class DetailDepositsModule { }
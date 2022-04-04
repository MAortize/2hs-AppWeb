import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ]
})
export class RegistroModule { }

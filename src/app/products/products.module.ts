import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HombreComponent } from './hombre/hombre.component';
import { MujerComponent } from './mujer/mujer.component';
import { UnisexComponent } from './unisex/unisex.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HombreComponent,
    MujerComponent,
    UnisexComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }

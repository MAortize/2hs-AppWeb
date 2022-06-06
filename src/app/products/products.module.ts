import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HombreComponent } from './hombre/hombre.component';
import { MujerComponent } from './mujer/mujer.component';
import { UnisexComponent } from './unisex/unisex.component';
import { SharedModule } from '../shared/shared.module';
import { ConfirmarHombreComponent } from './hombre/confirmar-hombre/confirmar-hombre.component';
import { ModalPersonalizarComponent } from './hombre/confirmar-hombre/modal-personalizar/modal-personalizar/modal-personalizar.component';


@NgModule({
  declarations: [
    HombreComponent,
    MujerComponent,
    UnisexComponent,
    ConfirmarHombreComponent,
    ModalPersonalizarComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }

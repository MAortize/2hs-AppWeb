import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmarHombreComponent } from './hombre/confirmar-hombre/confirmar-hombre.component';
import { HombreComponent } from './hombre/hombre.component';
import { MujerComponent } from './mujer/mujer.component';
import { UnisexComponent } from './unisex/unisex.component';

const routes: Routes = [
  { path: '', component: UnisexComponent },
  { path: 'unisex', component: UnisexComponent },
  { path: 'hombre', component: HombreComponent },
  { path: 'mujer', component: MujerComponent },
  { path: 'confirmar-hombre/:id', component: ConfirmarHombreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HombreComponent } from './hombre/hombre.component';
import { MujerComponent } from './mujer/mujer.component';
import { UnisexComponent } from './unisex/unisex.component';

const routes: Routes = [
  { path: '', component: UnisexComponent },
  { path: 'unisex', component: UnisexComponent },
  { path: 'hombre', component: HombreComponent },
  { path: 'mujer', component: MujerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

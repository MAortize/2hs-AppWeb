import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { 
    path: 'registro', loadChildren: () => import('./registro/registro.module').then(m => m.RegistroModule)
  },
  { 
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { 
    path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  { 
    path: 'clips', loadChildren: () => import('./clips/clips.module').then(m => m.ClipsModule)
  },
  { 
    path: 'multimedia', loadChildren: () => import('./multimedia/multimedia.module').then(m => m.MultimediaModule)
  },
  { 
    path: 'confirmar-hombre/:id', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

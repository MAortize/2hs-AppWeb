import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClipsComponent } from './clips/clips.component';

const routes: Routes = [
  { path: '', component: ClipsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClipsRoutingModule { }

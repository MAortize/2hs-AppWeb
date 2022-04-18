import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { InputDateComponent } from './components/input-date/input-date.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDate, NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomParserFormatter } from './components/formatter/NgbDateCustomParserFormatter ';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    InputComponent,
    InputDateComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    InputComponent,
    InputDateComponent ,
    SidebarComponent   
  ],
  providers: [
    {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}
  ]
})
export class SharedModule { }

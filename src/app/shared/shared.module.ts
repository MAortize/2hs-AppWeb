import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { InputDateComponent } from './components/input-date/input-date.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomParserFormatter } from './components/formatter/NgbDateCustomParserFormatter ';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    InputComponent,
    InputDateComponent,
    SidebarComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  exports: [
    InputComponent,
    InputDateComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ShoppingCartComponent
  ],
  providers: [
    {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { CreditCardDirectivesModule } from 'angular-cc-library';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,    AppRoutingModule,    FormsModule,    ReactiveFormsModule, 
    RxReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),CreditCardDirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

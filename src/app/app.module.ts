import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAccountComponent } from './componenents/list-account/list-account.component';
import {HttpClientModule} from '@angular/common/http';
import { NewAccountComponent } from './componenents/new-account/new-account.component';
import { CardProfileAccountComponent } from './componenents/card-profile-account/card-profile-account.component';
import { CardFormOperationComponent } from './componenents/card-form-operation/card-form-operation.component';
import { CardListOperationComponent } from './componenents/card-list-operation/card-list-operation.component';
import { SecreenAddOperationComponent } from './componenents/secreen-add-operation/secreen-add-operation.component';
import { SecreenDetailAccountComponent } from './componenents/secreen-detail-account/secreen-detail-account.component'
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListAccountComponent,
    NewAccountComponent,
    CardProfileAccountComponent,
    CardFormOperationComponent,
    CardListOperationComponent,
    SecreenAddOperationComponent,
    SecreenDetailAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

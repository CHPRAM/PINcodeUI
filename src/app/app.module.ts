import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListPincodeComponent } from './pincode/list-pincode/list-pincode.component';
import { LoginComponent } from './login/login.component';
import { AddPincodeComponent } from './pincode/add-pincode/add-pincode.component';
import { EditPincodeComponent } from './pincode/edit-pincode/edit-pincode.component';
import {routing} from './app.routing';
import {ReactiveFormsModule} from '@angular/forms';
import {ApiService} from './service/api.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './core/interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ListPincodeComponent,
    LoginComponent,
    AddPincodeComponent,
    EditPincodeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

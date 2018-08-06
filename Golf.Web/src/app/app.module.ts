import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { HttpModule, XHRBackend } from '@angular/http';
import { AuthenticateXHRBackend } from './authenticate-xhr.backend';

import { routing } from './app.routing';

/* App Root */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './account/login-form/login-form.component';

/* Account Imports */
import { AccountModule }  from './account/account.module';
/* Dashboard Imports */
import { DashboardModule }  from './dashboard/dashboard.module';

import { ConfigService } from './shared/utils/config.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent      
  ],
  imports: [
    AccountModule,
    DashboardModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ConfigService, { 
    provide: XHRBackend, 
    useClass: AuthenticateXHRBackend
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

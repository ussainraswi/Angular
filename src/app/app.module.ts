import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './ems/navbar/navbar.component';
import { HomeComponent } from './ems/home/home.component';

// var HomeComponent = "";
import { AddComponent } from './ems/add/add.component';
import { EditComponent } from './ems/edit/edit.component';
import { ShowComponent } from './ems/show/show.component';
import { LoginComponent } from './ems/login/login.component';

import { EmpService } from './emp.service';


//Auth service

import { AuthService } from './ems/services/auth.service';
import { UtilityService } from './ems/services/utility.service';
import { FormGroupComponent } from './ems/form-group/form-group.component';


// COmp primeng

// import { InputTextModule, ButtonModule, GrowlModule } from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddComponent,
    LoginComponent,
    EditComponent,
    ShowComponent,
    FormGroupComponent
  ],
  imports: [
    ReactiveFormsModule ,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EmpService, AuthService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }

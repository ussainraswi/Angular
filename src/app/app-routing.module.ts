import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './ems/home/home.component';
import { AddComponent } from './ems/add/add.component';
import { EditComponent } from './ems/edit/edit.component';
import { ShowComponent } from './ems/show/show.component';
import { LoginComponent } from './ems/login/login.component';
import { UtilityService } from 'app/ems/services/utility.service';

import { FormGroupComponent } from './ems/form-group/form-group.component';
  

const routes: Routes = [
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"add", component:AddComponent},
  {path:"edit/:id",component:EditComponent},
  {path:"show/:id", component:ShowComponent},
  {path:"form", component:FormGroupComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { 

}

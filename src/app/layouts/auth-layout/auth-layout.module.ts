import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/material.module";
import { LoginComponent } from "src/app/pages/login/login.component";
import { RegisterComponent } from "src/app/pages/register/register.component";
import { AuthLayoutRoutes } from "./auth-layout.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AuthLayoutRoutes),
    MaterialModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})

export class AuthLayoutModule { }

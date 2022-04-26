import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../material.module";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent, NavbarPasswordDialog } from "./navbar/navbar.component";
import { SidebarComponent, SidebarPasswordDialog } from "./sidebar/sidebar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    MaterialModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NavbarPasswordDialog,
    SidebarPasswordDialog
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})

export class ComponentsModule { }

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { NouisliderModule } from "ng2-nouislider";
import { MaterialModule } from "../material.module";
import { BasicelementsComponent } from "../pages/basicelements/basicelements.component";
import { NgbdModalComponent, NgbdModalContent } from "../pages/modal/modal.component";
import { NavigationComponent } from "../pages/navigation/navigation.component";
import { NotificationComponent } from "../pages/notification/notification.component";
import { TypographyComponent } from "../pages/typography/typography.component";
import { UpdateRequestDialog } from "../pages/user-management-front/user-management-front.component";
import { NgbdModalFrontVerification } from "../pages/verification-front/verification-front.component";
import { NgbdModalVerification } from "../pages/verification/verification.component";
import { FooterFrontComponent } from "./footer-front/footer-front.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarFrontComponent, NavbarFrontPasswordDialog } from "./navbar-front/navbar-front.component";
import { NavbarComponent, NavbarPasswordDialog } from "./navbar/navbar.component";
import { SidebarComponent, SidebarPasswordDialog } from "./sidebar/sidebar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    MaterialModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NavbarPasswordDialog,
    SidebarPasswordDialog,
    FooterFrontComponent,
    NavbarFrontComponent,
    BasicelementsComponent,
    NavigationComponent,
    NotificationComponent,
    TypographyComponent,
    NgbdModalComponent,
    NgbdModalContent,
    NavbarFrontPasswordDialog,
    NgbdModalVerification,
    NgbdModalFrontVerification,
    UpdateRequestDialog
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    FooterFrontComponent,
    NavbarFrontComponent,
    BasicelementsComponent,
    NavigationComponent,
    NotificationComponent,
    TypographyComponent,
    NgbdModalComponent,
    NgbdModalContent,
    NavbarPasswordDialog,
    NgbdModalVerification,
    NgbdModalFrontVerification,
    UpdateRequestDialog
  ],
  entryComponents: [
    NgbdModalContent,
    NavbarFrontPasswordDialog,
    NgbdModalVerification,
    NgbdModalFrontVerification
  ]
})

export class ComponentsModule { }

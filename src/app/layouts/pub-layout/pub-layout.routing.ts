import { Routes } from '@angular/router';





import {FrontComponent} from "../../front/front.component";
import {CreatePostComponent} from "../../front/create-post/create-post.component";

export const PubLayoutRoutes: Routes = [

  { path: 'home',       component: FrontComponent },
  { path: 'post/add', component: CreatePostComponent }
];

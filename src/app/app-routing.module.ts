import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ResetpasswordComponent} from './resetpassword/resetpassword.component';
import{CreatebookingComponent} from './createbooking/createbooking.component';
import {ViewbookingComponent} from './viewbooking/viewbooking.component';
import {ViewaddonsComponent} from './viewaddons/viewaddons.component';
import {ViewmoviesComponent} from './viewmovies/viewmovies.component';
import {ViewoffersComponent} from './viewoffers/viewoffers.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'createbooking',component: CreatebookingComponent},
  {path:'viewbooking',component: ViewbookingComponent},
  {path:'viewaddons',component: ViewaddonsComponent},
  {path:'viewmovies',component: ViewmoviesComponent},
  {path:'viewoffers',component: ViewoffersComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

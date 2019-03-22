import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import {FormsModule} from "@angular/forms";
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {RegisterComponent} from './register/register.component';
import{CreatebookingComponent} from './createbooking/createbooking.component';
import {ViewbookingComponent} from './viewbooking/viewbooking.component';
import {ViewaddonsComponent} from './viewaddons/viewaddons.component';
import {ViewmoviesComponent} from './viewmovies/viewmovies.component';
import {ViewoffersComponent} from './viewoffers/viewoffers.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ResetpasswordComponent} from './resetpassword/resetpassword.component';
@NgModule({
  declarations: [AppComponent,LoginComponent,RegisterComponent,ResetpasswordComponent,
    CreatebookingComponent,ViewbookingComponent,ViewaddonsComponent,ViewmoviesComponent,ViewoffersComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

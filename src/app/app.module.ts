import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
 
let config = {
  apiKey: "AIzaSyAyrogPXBePjQB2gcV-J7BaCWt3WpVikGg",
  authDomain: "scribe-3cdef.firebaseapp.com",
  databaseURL: "https://scribe-3cdef.firebaseio.com",
  projectId: "scribe-3cdef",
  storageBucket: "scribe-3cdef.appspot.com",
  messagingSenderId: "1063973320921"
};


firebase.initializeApp(config);





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
   
    SignupComponent,
   
    LoginComponent,
   
    HomeComponent,
   
    MyblogsComponent,
   
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

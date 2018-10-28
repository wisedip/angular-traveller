import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CeoComponent } from './home/ceo/ceo.component';
import { ThreecolComponent } from './home/threecol/threecol.component';
import { JumbotronComponent } from './home/jumbotron/jumbotron.component';
import {ProfileComponent} from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ParticlesModule } from 'angular-particle';

import {ValidateService} from './register/validate/validate.service';
import { AuthService } from './register/validate/auth.service';
import { AuthGuard } from './register/validate/auth.guard';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AboutComponent,
    NavigationComponent,
    CarouselComponent,
    CeoComponent,
    ThreecolComponent,
    JumbotronComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
    positionClass: 'toast-top-right',
    preventDuplicates: true}) ,
    ReactiveFormsModule,
    ParticlesModule// ToastrModule added
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

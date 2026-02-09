import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { Card1Component } from './card1/card1.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GamesComponent } from './games/games.component';
import { IndiaComponent } from './india/india.component';
import { UsaComponent } from './usa/usa.component';
import { CanadaComponent } from './canada/canada.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { StudentComponent } from './admin/student/student.component';
import { UserComponent } from './admin/user/user.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { Admin1Component } from './admin1/admin1.component';
import { AdmingalleryComponent } from './admingallery/admingallery.component';
import { AdminindiaComponent } from './admin/adminindia/adminindia.component';
import { AdminusaComponent } from './admin/adminusa/adminusa.component';
import { AdmincanadaComponent } from './admin/admincanada/admincanada.component';
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    HomeComponent,
    Card1Component,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    BlogComponent,
    GalleryComponent,
    GamesComponent,
    IndiaComponent,
    UsaComponent,
    CanadaComponent,
    DashboardComponent,
    LoginComponent,
    StudentComponent,
    UserComponent,
    FeedbackComponent,
    Admin1Component,
    AdmingalleryComponent,
    AdminindiaComponent,
    AdminusaComponent,
    AdmincanadaComponent,
    SafePipe,
   
    
  
  ],
  imports: [
    FormsModule,
     HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

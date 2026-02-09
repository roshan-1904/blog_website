import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from'./main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import{BlogComponent } from'./blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GamesComponent } from './games/games.component';
import { IndiaComponent } from './india/india.component';
import { UsaComponent } from './usa/usa.component';
import { CanadaComponent } from './canada/canada.component';
import{ Admin1Component } from'./admin1/admin1.component';
import { UserComponent } from './admin/user/user.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdmingalleryComponent } from './admingallery/admingallery.component';
import { AdminindiaComponent } from './admin/adminindia/adminindia.component';  
import { AdminusaComponent } from './admin/adminusa/adminusa.component';
import { AdmincanadaComponent } from './admin/admincanada/admincanada.component'; 


const routes: Routes = [
{path: '', component: MainComponent},
{path: 'about', component: AboutComponent},
{path: 'main', component: MainComponent},
{path: 'contact', component: ContactComponent},
{path: 'blog', component: BlogComponent},
{path: 'gallery', component: GalleryComponent},
{path: 'games', component:GamesComponent},
{path: 'india', component:IndiaComponent},
{path: 'usa',component:UsaComponent},
{path: 'canada',component:CanadaComponent},
{path: 'admin1',component:Admin1Component},
{ path: 'admin', component: UserComponent },
{path:'feedback',component:FeedbackComponent},
{path:'admingallery',component:AdmingalleryComponent},
{path:'adminindia',component:AdminindiaComponent},
{path:'adminusa',component:AdminusaComponent},
{path:'admincanada',component:AdmincanadaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

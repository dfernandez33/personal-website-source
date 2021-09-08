import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'photo-gallery', component: PhotoGalleryComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

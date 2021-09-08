import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ResumeTabsComponent } from './widgets/resume-tabs/resume-tabs.component';
import { FooterComponent } from './components/footer/footer.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import { PhotoGalleryCardComponent } from './widgets/photo-gallery-card/photo-gallery-card.component';
import { LoginButtonComponent } from './widgets/login-button/login-button.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage'
import { environment } from 'src/environments/environment';
import { DropzoneDirective } from './directives/dropzone.directive';
import { UploaderComponent } from './components/uploader/uploader.component';
import { UploadTaskComponent } from './widgets/upload-task/upload-task.component';
import { SpinnerComponent } from './widgets/spinner/spinner.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { LoadedDirective } from './directives/loaded.directive';
import { HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ResumeComponent,
    ResumeTabsComponent,
    FooterComponent,
    PhotoGalleryComponent,
    PhotoGalleryCardComponent,
    LoginButtonComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    SpinnerComponent,
    ContactMeComponent,
    LoadedDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

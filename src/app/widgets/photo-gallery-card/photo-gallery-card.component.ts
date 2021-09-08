import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Image } from 'src/app/interfaces/image';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';


@Component({
  selector: 'app-photo-gallery-card',
  templateUrl: './photo-gallery-card.component.html',
  styleUrls: ['./photo-gallery-card.component.sass']
})
export class PhotoGalleryCardComponent {

  @Input() imageData: Image = {downloadURL: '', album: '', uploadDate: '', customID: ''};
  showImageModal = false;
  showDeleteButton = false;
  showDeleteModal = false;
  isImageLoaded = false;
  
  constructor(public auth: AuthenticationService, private db: AngularFirestore, private storage: AngularFireStorage, private http: HttpClient) { 
    this.auth.authStateChange.subscribe((isLoggedIn) => {
      this.showDeleteButton = isLoggedIn;
    })
  }

  toggleImageModal() {
    this.showImageModal = !this.showImageModal;
  }

  toggleDeleteModal() {
    this.showDeleteModal = !this.showDeleteModal
  }

  deleteImage() {
    this.db.doc('photos/' + this.imageData.customID).delete();
    this.storage.refFromURL(this.imageData.downloadURL).delete();
  }

  downloadImage() {
    this.http.get(this.imageData.downloadURL, { responseType: 'blob' }).subscribe(val => {
      console.log(val);
      const url = URL.createObjectURL(val);
      this.downloadURL(url, this.imageData.customID);
      URL.revokeObjectURL(url);
    });
  }

  downloadURL(url: string, filename: string) {
    const a: any = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.style = 'display: none';
    a.click();
    a.remove();
  }

  removeSpinner() {
    this.isImageLoaded = true;
  }

}

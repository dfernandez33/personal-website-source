import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Image } from 'src/app/interfaces/image';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';


@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.sass']
})
export class PhotoGalleryComponent implements OnInit{
  showFAB = false;
  showUploader = false;

  private imageDataCollection: AngularFirestoreCollection<Image>;
  imageData$: Observable<Image[]>;

  constructor(public auth: AuthenticationService, private db: AngularFirestore) {
    this.auth.authStateChange.subscribe((isLoggedIn) => {
      this.showFAB = isLoggedIn;
    })
    this.imageDataCollection = this.db.collection<Image>('photos');
    this.imageData$ = this.imageDataCollection.valueChanges({ idField: 'customID' } );
  }

  ngOnInit() {
  }

  toggleUploader() {
    this.showUploader = !this.showUploader;
  }

}

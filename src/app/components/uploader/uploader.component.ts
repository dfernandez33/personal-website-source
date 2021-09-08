import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, combineLatest} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Album } from 'src/app/interfaces/album';


@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.sass']
})
export class UploaderComponent {

  isHovering: boolean = false;
  showWarningText = false;

  files: File[] = [];

  formController = new FormControl();
  albumInput: Observable<string>
  private albumsCollection: AngularFirestoreCollection<Album>;
  albums$: Observable<Album[]>;
  filteredAlbums$: Observable<string[]>;

  constructor(private db: AngularFirestore) {
    this.albumsCollection = this.db.collection<Album>('albums');
    this.albums$ = this.albumsCollection.valueChanges();
    this.albumInput = this.formController.valueChanges.pipe(
      startWith(''),
      map(value => value.toLowerCase())
    );
    this.filteredAlbums$ = combineLatest([this.albums$, this.albumInput]).pipe(
      map((results: [Album[], string]) => {
        const albums = results[0];
        const substring = results[1];
        return albums.filter(album => album.name.toLowerCase().includes(substring)).map(album => album.name);
      })
    )
  }


  toggleHover(event: any) {
    this.isHovering = event;
  }

  onDrop(files: any, album: string) {
    if (album == '') {
      this.showWarningText = true;
    } else {
      for (let i = 0; i < files.length; i++) {
        this.files.push(files.item(i) as File);
      }
      this.showWarningText = false;
    }

  }
}

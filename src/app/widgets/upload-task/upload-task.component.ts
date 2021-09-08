import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Album } from 'src/app/interfaces/album';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.sass']
})
export class UploadTaskComponent implements OnInit {

  @Input() file!: File;
  @Input() album!: string;
  @Input() existingAlbums!: Album[];
  @Input() isAlbumCover = false;

  task!: AngularFireUploadTask;

  percentage!: Observable<number>;
  snapshot!: Observable<any>;
  downloadURL!: string;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {

    // The storage path
    const path = `photo-gallery/${this.album}/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges() as Observable<number>;

    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();

        this.db.collection('photos').add( { downloadURL: this.downloadURL, album: this.album, 
          uploadDate: Date.now() });
        if (!this.existingAlbums.map(album => album.name).includes(this.album) && this.isAlbumCover) {
          this.db.collection('albums').add({name: this.album, coverImageURL: this.downloadURL});
        }
      }),
    );
  }

  isActive(snapshot: any) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}

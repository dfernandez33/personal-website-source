import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGalleryCardComponent } from './photo-gallery-card.component';

describe('PhotoGalleryCardComponent', () => {
  let component: PhotoGalleryCardComponent;
  let fixture: ComponentFixture<PhotoGalleryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoGalleryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGalleryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

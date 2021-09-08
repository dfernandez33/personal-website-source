import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTabsComponent } from './resume-tabs.component';

describe('ResumeTabsComponent', () => {
  let component: ResumeTabsComponent;
  let fixture: ComponentFixture<ResumeTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

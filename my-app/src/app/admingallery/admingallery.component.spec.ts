import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingalleryComponent } from './admingallery.component';

describe('AdmingalleryComponent', () => {
  let component: AdmingalleryComponent;
  let fixture: ComponentFixture<AdmingalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmingalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmingalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

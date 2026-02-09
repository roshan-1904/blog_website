import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindiaComponent } from './adminindia.component';

describe('AdminindiaComponent', () => {
  let component: AdminindiaComponent;
  let fixture: ComponentFixture<AdminindiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminindiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

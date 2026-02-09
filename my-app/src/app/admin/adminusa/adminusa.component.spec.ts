import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminusaComponent } from './adminusa.component';

describe('AdminusaComponent', () => {
  let component: AdminusaComponent;
  let fixture: ComponentFixture<AdminusaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminusaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminusaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

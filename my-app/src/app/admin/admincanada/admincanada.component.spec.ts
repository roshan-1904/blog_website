import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincanadaComponent } from './admincanada.component';

describe('AdmincanadaComponent', () => {
  let component: AdmincanadaComponent;
  let fixture: ComponentFixture<AdmincanadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincanadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

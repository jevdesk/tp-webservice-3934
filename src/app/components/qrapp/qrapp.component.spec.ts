import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrappComponent } from './qrapp.component';

describe('QrappComponent', () => {
  let component: QrappComponent;
  let fixture: ComponentFixture<QrappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

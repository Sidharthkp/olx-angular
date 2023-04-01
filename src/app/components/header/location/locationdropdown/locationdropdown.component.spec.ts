import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationdropdownComponent } from './locationdropdown.component';

describe('LocationdropdownComponent', () => {
  let component: LocationdropdownComponent;
  let fixture: ComponentFixture<LocationdropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationdropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

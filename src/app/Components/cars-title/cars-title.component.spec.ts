import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsTitleComponent } from './cars-title.component';

describe('CarsTitleComponent', () => {
  let component: CarsTitleComponent;
  let fixture: ComponentFixture<CarsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsTitleComponent ]
    })
    .compileComponents();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

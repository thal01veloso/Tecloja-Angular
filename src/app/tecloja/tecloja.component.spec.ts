import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeclojaComponent } from './tecloja.component';

describe('TeclojaComponent', () => {
  let component: TeclojaComponent;
  let fixture: ComponentFixture<TeclojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeclojaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeclojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

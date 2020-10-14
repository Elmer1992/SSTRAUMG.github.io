import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialentradaComponent } from './historialentrada.component';

describe('HistorialentradaComponent', () => {
  let component: HistorialentradaComponent;
  let fixture: ComponentFixture<HistorialentradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialentradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialentradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

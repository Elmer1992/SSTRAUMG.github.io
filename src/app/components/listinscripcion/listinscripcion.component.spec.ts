import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinscripcionComponent } from './listinscripcion.component';

describe('ListinscripcionComponent', () => {
  let component: ListinscripcionComponent;
  let fixture: ComponentFixture<ListinscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListinscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListinscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

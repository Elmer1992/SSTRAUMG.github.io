import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituaAlumComponent } from './situa-alum.component';

describe('SituaAlumComponent', () => {
  let component: SituaAlumComponent;
  let fixture: ComponentFixture<SituaAlumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituaAlumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituaAlumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

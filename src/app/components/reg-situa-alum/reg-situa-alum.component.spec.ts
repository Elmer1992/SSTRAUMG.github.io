import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegSituaAlumComponent } from './reg-situa-alum.component';

describe('RegSituaAlumComponent', () => {
  let component: RegSituaAlumComponent;
  let fixture: ComponentFixture<RegSituaAlumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegSituaAlumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegSituaAlumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

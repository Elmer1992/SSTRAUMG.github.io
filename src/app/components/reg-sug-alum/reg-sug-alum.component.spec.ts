import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegSugAlumComponent } from './reg-sug-alum.component';

describe('RegSugAlumComponent', () => {
  let component: RegSugAlumComponent;
  let fixture: ComponentFixture<RegSugAlumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegSugAlumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegSugAlumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

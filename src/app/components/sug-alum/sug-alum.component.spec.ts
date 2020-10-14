import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugAlumComponent } from './sug-alum.component';

describe('SugAlumComponent', () => {
  let component: SugAlumComponent;
  let fixture: ComponentFixture<SugAlumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugAlumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugAlumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradahoyComponent } from './entradahoy.component';

describe('EntradahoyComponent', () => {
  let component: EntradahoyComponent;
  let fixture: ComponentFixture<EntradahoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradahoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradahoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

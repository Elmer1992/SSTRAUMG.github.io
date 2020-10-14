import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegRegTerceroComponent } from './reg-reg-tercero.component';

describe('RegRegTerceroComponent', () => {
  let component: RegRegTerceroComponent;
  let fixture: ComponentFixture<RegRegTerceroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegRegTerceroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegRegTerceroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

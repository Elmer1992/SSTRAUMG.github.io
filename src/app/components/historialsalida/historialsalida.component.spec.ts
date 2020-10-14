import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialsalidaComponent } from './historialsalida.component';

describe('HistorialsalidaComponent', () => {
  let component: HistorialsalidaComponent;
  let fixture: ComponentFixture<HistorialsalidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialsalidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialsalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

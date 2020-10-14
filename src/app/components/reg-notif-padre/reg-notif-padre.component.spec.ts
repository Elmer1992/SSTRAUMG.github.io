import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegNotifPadreComponent } from './reg-notif-padre.component';

describe('RegNotifPadreComponent', () => {
  let component: RegNotifPadreComponent;
  let fixture: ComponentFixture<RegNotifPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegNotifPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegNotifPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifPadreComponent } from './notif-padre.component';




describe('NotifPadreComponent', () => {
  let component: NotifPadreComponent;
  let fixture: ComponentFixture<NotifPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

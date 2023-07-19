import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAppComponent } from './message-app.component';

describe('MessageAppComponent', () => {
  let component: MessageAppComponent;
  let fixture: ComponentFixture<MessageAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageAppComponent]
    });
    fixture = TestBed.createComponent(MessageAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

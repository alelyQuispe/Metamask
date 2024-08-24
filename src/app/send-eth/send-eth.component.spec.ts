import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEthComponent } from './send-eth.component';

describe('SendEthComponent', () => {
  let component: SendEthComponent;
  let fixture: ComponentFixture<SendEthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendEthComponent]
    });
    fixture = TestBed.createComponent(SendEthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

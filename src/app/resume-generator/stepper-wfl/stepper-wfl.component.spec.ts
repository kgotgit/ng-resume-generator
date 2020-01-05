import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperWflComponent } from './stepper-wfl.component';

describe('StepperWflComponent', () => {
  let component: StepperWflComponent;
  let fixture: ComponentFixture<StepperWflComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperWflComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperWflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryStepsComponent } from './factory-steps.component';

describe('FactoryStepsComponent', () => {
  let component: FactoryStepsComponent;
  let fixture: ComponentFixture<FactoryStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondimentoItemComponent } from './condimento-item.component';

describe('CondimentoItemComponent', () => {
  let component: CondimentoItemComponent;
  let fixture: ComponentFixture<CondimentoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondimentoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondimentoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

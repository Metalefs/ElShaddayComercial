import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioCardComponent } from './cardapio-card.component';

describe('CardapioCardComponent', () => {
  let component: CardapioCardComponent;
  let fixture: ComponentFixture<CardapioCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapioCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

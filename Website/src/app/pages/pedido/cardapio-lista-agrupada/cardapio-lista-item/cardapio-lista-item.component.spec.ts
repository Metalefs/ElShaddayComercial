import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioListaItemComponent } from './cardapio-lista-item.component';

describe('CardapioListaItemComponent', () => {
  let component: CardapioListaItemComponent;
  let fixture: ComponentFixture<CardapioListaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapioListaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioListaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioListaAgrupadaComponent } from './cardapio-lista-agrupada.component';

describe('CardapioListaAgrupadaComponent', () => {
  let component: CardapioListaAgrupadaComponent;
  let fixture: ComponentFixture<CardapioListaAgrupadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapioListaAgrupadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioListaAgrupadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

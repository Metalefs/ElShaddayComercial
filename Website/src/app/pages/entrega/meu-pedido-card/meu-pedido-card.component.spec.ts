import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPedidoCardComponent } from './meu-pedido-card.component';

describe('MeuPedidoCardComponent', () => {
  let component: MeuPedidoCardComponent;
  let fixture: ComponentFixture<MeuPedidoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPedidoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPedidoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

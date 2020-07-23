import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPrecoMarmitexComponent } from './editar-preco-marmitex.component';

describe('EditarPrecoMarmitexComponent', () => {
  let component: EditarPrecoMarmitexComponent;
  let fixture: ComponentFixture<EditarPrecoMarmitexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPrecoMarmitexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPrecoMarmitexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

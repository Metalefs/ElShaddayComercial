import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCardapioComponent } from './editar-cardapio.component';

describe('EditarCardapioComponent', () => {
  let component: EditarCardapioComponent;
  let fixture: ComponentFixture<EditarCardapioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCardapioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

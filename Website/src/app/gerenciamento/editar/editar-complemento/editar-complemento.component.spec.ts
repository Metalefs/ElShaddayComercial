import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarComplementoComponent } from './editar-complemento.component';

describe('EditarComplementoComponent', () => {
  let component: EditarComplementoComponent;
  let fixture: ComponentFixture<EditarComplementoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarComplementoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarComplementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

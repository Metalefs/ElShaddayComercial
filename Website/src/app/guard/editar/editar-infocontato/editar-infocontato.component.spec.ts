import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInfocontatoComponent } from './editar-infocontato.component';

describe('EditarInfocontatoComponent', () => {
  let component: EditarInfocontatoComponent;
  let fixture: ComponentFixture<EditarInfocontatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarInfocontatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInfocontatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSobreComponent } from './editar-sobre.component';

describe('EditarSobreComponent', () => {
  let component: EditarSobreComponent;
  let fixture: ComponentFixture<EditarSobreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSobreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconeWhatsappComponent } from './icone-whatsapp.component';

describe('IconeWhatsappComponent', () => {
  let component: IconeWhatsappComponent;
  let fixture: ComponentFixture<IconeWhatsappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconeWhatsappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconeWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

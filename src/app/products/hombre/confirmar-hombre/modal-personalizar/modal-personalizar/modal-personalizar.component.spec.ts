import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPersonalizarComponent } from './modal-personalizar.component';

describe('ModalPersonalizarComponent', () => {
  let component: ModalPersonalizarComponent;
  let fixture: ComponentFixture<ModalPersonalizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPersonalizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPersonalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

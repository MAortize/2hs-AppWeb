import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarHombreComponent } from './confirmar-hombre.component';

describe('ConfirmarHombreComponent', () => {
  let component: ConfirmarHombreComponent;
  let fixture: ComponentFixture<ConfirmarHombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarHombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarHombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmacionCreacionComponent } from './modal-confirmacion-creacion.component';

describe('ModalConfirmacionCreacionComponent', () => {
  let component: ModalConfirmacionCreacionComponent;
  let fixture: ComponentFixture<ModalConfirmacionCreacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmacionCreacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConfirmacionCreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

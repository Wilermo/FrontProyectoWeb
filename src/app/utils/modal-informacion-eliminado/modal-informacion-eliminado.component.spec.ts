import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInformacionEliminadoComponent } from './modal-informacion-eliminado.component';

describe('ModalInformacionEliminadoComponent', () => {
  let component: ModalInformacionEliminadoComponent;
  let fixture: ComponentFixture<ModalInformacionEliminadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInformacionEliminadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInformacionEliminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

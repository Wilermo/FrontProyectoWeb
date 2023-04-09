import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInformacionErrorComponent } from './modal-informacion-error.component';

describe('ModalInformacionErrorComponent', () => {
  let component: ModalInformacionErrorComponent;
  let fixture: ComponentFixture<ModalInformacionErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInformacionErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInformacionErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

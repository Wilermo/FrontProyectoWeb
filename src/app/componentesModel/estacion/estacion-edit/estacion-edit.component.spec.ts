import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionEditComponent } from './estacion-edit.component';

describe('EstacionEditComponent', () => {
  let component: EstacionEditComponent;
  let fixture: ComponentFixture<EstacionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstacionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstacionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

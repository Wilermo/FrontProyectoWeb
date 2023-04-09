import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionAddComponent } from './estacion-add.component';

describe('EstacionAddComponent', () => {
  let component: EstacionAddComponent;
  let fixture: ComponentFixture<EstacionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstacionAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstacionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

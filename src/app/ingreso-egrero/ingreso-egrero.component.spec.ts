import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoEgreroComponent } from './ingreso-egrero.component';

describe('IngresoEgreroComponent', () => {
  let component: IngresoEgreroComponent;
  let fixture: ComponentFixture<IngresoEgreroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoEgreroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresoEgreroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

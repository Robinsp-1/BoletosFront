import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelosListarComponentComponent } from './vuelos-listar-component.component';

describe('VuelosListarComponentComponent', () => {
  let component: VuelosListarComponentComponent;
  let fixture: ComponentFixture<VuelosListarComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VuelosListarComponentComponent]
    });
    fixture = TestBed.createComponent(VuelosListarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelosEditatComponent } from './vuelos-editat.component';

describe('VuelosEditatComponent', () => {
  let component: VuelosEditatComponent;
  let fixture: ComponentFixture<VuelosEditatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VuelosEditatComponent]
    });
    fixture = TestBed.createComponent(VuelosEditatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

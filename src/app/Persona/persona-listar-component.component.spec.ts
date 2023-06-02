import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaListarComponentComponent } from './persona-listar-component.component';

describe('PersonaListarComponentComponent', () => {
  let component: PersonaListarComponentComponent;
  let fixture: ComponentFixture<PersonaListarComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaListarComponentComponent]
    });
    fixture = TestBed.createComponent(PersonaListarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

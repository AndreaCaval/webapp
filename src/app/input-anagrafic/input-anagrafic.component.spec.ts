import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAnagraficComponent } from './input-anagrafic.component';

describe('InputAnagraficComponent', () => {
  let component: InputAnagraficComponent;
  let fixture: ComponentFixture<InputAnagraficComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputAnagraficComponent]
    });
    fixture = TestBed.createComponent(InputAnagraficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

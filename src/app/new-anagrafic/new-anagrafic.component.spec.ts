import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnagraficComponent } from './new-anagrafic.component';

describe('NewAnagraficComponent', () => {
  let component: NewAnagraficComponent;
  let fixture: ComponentFixture<NewAnagraficComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAnagraficComponent]
    });
    fixture = TestBed.createComponent(NewAnagraficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

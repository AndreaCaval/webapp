import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAnagraficComponent } from './single-anagrafic.component';

describe('SingleAnagraficComponent', () => {
  let component: SingleAnagraficComponent;
  let fixture: ComponentFixture<SingleAnagraficComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleAnagraficComponent]
    });
    fixture = TestBed.createComponent(SingleAnagraficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

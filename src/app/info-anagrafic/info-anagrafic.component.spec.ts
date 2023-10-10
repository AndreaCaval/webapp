import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAnagraficComponent } from './info-anagrafic.component';

describe('InfoAnagraficComponent', () => {
  let component: InfoAnagraficComponent;
  let fixture: ComponentFixture<InfoAnagraficComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoAnagraficComponent]
    });
    fixture = TestBed.createComponent(InfoAnagraficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

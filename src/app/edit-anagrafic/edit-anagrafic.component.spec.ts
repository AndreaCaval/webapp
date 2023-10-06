import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnagraficComponent } from './edit-anagrafic.component';

describe('EditAnagraficComponent', () => {
  let component: EditAnagraficComponent;
  let fixture: ComponentFixture<EditAnagraficComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAnagraficComponent]
    });
    fixture = TestBed.createComponent(EditAnagraficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

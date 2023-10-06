import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAnagraficComponent } from './table-anagrafic.component';

describe('TableAnagraficComponent', () => {
  let component: TableAnagraficComponent;
  let fixture: ComponentFixture<TableAnagraficComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableAnagraficComponent]
    });
    fixture = TestBed.createComponent(TableAnagraficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

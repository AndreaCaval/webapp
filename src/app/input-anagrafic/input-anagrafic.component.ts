import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-anagrafic',
  templateUrl: './input-anagrafic.component.html',
  styleUrls: ['./input-anagrafic.component.css']
})
export class InputAnagraficComponent implements OnInit {
  exampleChildForm!: FormGroup;
  @Input() formData!: FormGroup;
  @Output() onFormGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.exampleChildForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });

    this.addGroupToParent();
  }

  get fc() {
    return this.exampleChildForm.controls
  }

  clearText(): void {
    this.exampleChildForm.get('firstName')?.setValue('');
  }

  private addGroupToParent(): void {
    this.formData.addControl('userInfo', new FormGroup(this.exampleChildForm.controls));
    this.onFormGroupChange.emit(this.formData);
  }
}

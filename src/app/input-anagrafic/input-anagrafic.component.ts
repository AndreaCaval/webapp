import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EditAnagraficService } from '../edit-anagrafic.service';

@Component({
  selector: 'app-input-anagrafic',
  templateUrl: './input-anagrafic.component.html',
  styleUrls: ['./input-anagrafic.component.css']
})
export class InputAnagraficComponent implements OnInit {
  userData!: FormGroup;
  @Input() formData!: FormGroup;
  @Output() onFormGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private editAnagraficService: EditAnagraficService) { }

  ngOnInit() {
    let id = null
    this.route.paramMap.subscribe(value => {
      id = value.get('id')
    })
    let editUser = this.editAnagraficService.editUser
    if (editUser != undefined && id != null) {
      this.userData = this.fb.group({
        firstName: [editUser[0].firstName, [Validators.required]],
        lastName: [editUser[0].lastName, [Validators.required]],
        email: [editUser[0].email, [Validators.required, Validators.email]],
        city: [editUser[0].city, [Validators.required]],
        province: [editUser[0].province,],
        location: [editUser[0].location,],
        address: [editUser[0].address,],
        notes: [editUser[0].notes,],
        id: [editUser[0].id,],
      });
    }
    else {
      this.userData = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        city: ['', [Validators.required]],
        province: ['',],
        location: ['',],
        address: ['',],
        notes: ['',],
        id: ['',],
      });
    }
    

    this.addGroupToParent();
  }

  get fc() {
    return this.userData.controls
  }

  // clearText(): void {
  //   this.userData.get('firstName')?.setValue('');
  // }

  private addGroupToParent(): void {
    this.formData.addControl('userInfo', new FormGroup(this.userData.controls));
    this.onFormGroupChange.emit(this.formData);
  }
}

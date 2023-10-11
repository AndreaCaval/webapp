import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditAnagraficService } from '../edit-anagrafic.service';
import { ActivatedRoute } from '@angular/router';

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
      localStorage.setItem('editUser', JSON.stringify(editUser))
      this.preSetUserData(editUser)
    }
    else if (id != null) {
      let d = JSON.parse(localStorage.getItem('editUser')!)       
      this.preSetUserData(d)
    }
    else {
      this.setUserData('', '', '', '', '', '', '', '', '')
    }
    this.addGroupToParent();
  }

  private preSetUserData(editUser: any){
    this.setUserData(editUser[0].firstName,
      editUser[0].lastName,
      editUser[0].email,
      editUser[0].city,
      editUser[0].province!,
      editUser[0].location!,
      editUser[0].address!,
      editUser[0].notes!,
      editUser[0].id)
  }

  private setUserData(fn: string, ln: string, e: string, c: string, p: string, l: string, a: string, n: string, id: string) {
    this.userData = this.fb.group({
      firstName: [fn, [Validators.required]],
      lastName: [ln, [Validators.required]],
      email: [e, [Validators.required, Validators.email]],
      city: [c, [Validators.required]],
      province: [p,],
      location: [l,],
      address: [a,],
      notes: [n,],
      id: [id,],
    });
  }

  get fc() {
    return this.userData.controls
  }

  private addGroupToParent(): void {
    this.formData.addControl('userInfo', new FormGroup(this.userData.controls));
    this.onFormGroupChange.emit(this.formData);
  }
}

import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { InputAnagraficComponent } from '../input-anagrafic/input-anagrafic.component';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-anagrafic',
  templateUrl: './new-anagrafic.component.html',
  styleUrls: ['./new-anagrafic.component.css']
})
export class NewAnagraficComponent {

  newAnagraficForm:any

  constructor(fb: FormBuilder, private router: Router) {
    this.newAnagraficForm = fb.group({});
  }

  // get fc(){
  //   return this.newAnagraficForm.controls
  // }

  submitForm() {
    console.log(this.newAnagraficForm.value.userInfo);
    let newUser:User = this.newAnagraficForm.value.userInfo
  }

  onChange(form:any) {
    // reset the form value to the newly emitted form group value.
    this.newAnagraficForm = form;
  }

  onSubmit(){
    this.router.navigate(['/'])
  }
}

import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-anagrafic',
  templateUrl: './new-anagrafic.component.html',
  styleUrls: ['./new-anagrafic.component.css']
})
export class NewAnagraficComponent {

  newAnagraficForm: any

  constructor(fb: FormBuilder, private router: Router, public rs: HomeService) {
    this.newAnagraficForm = fb.group({});
  }

  submitForm() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'New anagrafic has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    let newUser: User[] = this.newAnagraficForm.value.userInfo    
    this.rs.newUsers(newUser).subscribe()    
    this.router.navigate(['/'])
  }

  onChange(form: any) {
    this.newAnagraficForm = form;
  }

  onSubmit() {
    this.router.navigate(['/'])
  }
}
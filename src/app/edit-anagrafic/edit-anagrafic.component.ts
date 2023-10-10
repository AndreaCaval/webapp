import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-anagrafic',
  templateUrl: './edit-anagrafic.component.html',
  styleUrls: ['./edit-anagrafic.component.css']
})
export class EditAnagraficComponent implements OnInit {
  editAnagraficForm!: FormGroup;
  user!: User[];
  constructor(public rs: HomeService, fb: FormBuilder, private router: Router) {
    this.editAnagraficForm = fb.group({});
  }

  ngOnInit(): void {  }

  submitForm() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Anagrafic has been edited successfully',
      showConfirmButton: false,
      timer: 1500
    })
    let editUser: User[] = this.editAnagraficForm.value.userInfo    
    let id = this.editAnagraficForm.value.userInfo.id    
    this.rs.updateUser(id, editUser).subscribe()
    this.router.navigate(['/'])
  }

  onChange(form: any) {
    this.editAnagraficForm = form;
  }

  onSubmit() {
    this.router.navigate(['/'])
  }
}

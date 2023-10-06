import { Component } from '@angular/core';
import { FormArray, NgForm, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataUsers = [{
    firstName: 'John',
    lastName: 'Wick',
    city: 'San Francisco',
    email: 'john@gmail.com',
  }]

  onDelete(index:any){
    this.dataUsers.splice(index, 1);
  }
}

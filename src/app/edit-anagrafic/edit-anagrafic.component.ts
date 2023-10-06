import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-anagrafic',
  templateUrl: './edit-anagrafic.component.html',
  styleUrls: ['./edit-anagrafic.component.css']
})
export class EditAnagraficComponent implements OnInit{
  editAnagraficForm!: FormGroup;

  constructor(fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.editAnagraficForm = fb.group({});
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      let id = value.get('id')
      console.log(id);
    })
  }
  // get fc(){
  //   return this.editAnagraficForm.controls
  // }

  submitForm() {
    console.log(this.editAnagraficForm.value.userInfo);
  }

  onChange(form:any) {
    // reset the form value to the newly emitted form group value.
    this.editAnagraficForm = form;
  }

  onSubmit(){
    this.router.navigate(['/'])
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HomeService } from '../home.service';
import { EditAnagraficService } from '../edit-anagrafic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  users: User[] = [];
  filterUsers: User[] = [];
  filter: any;
  constructor(public rs: HomeService, private editAnagraficService:EditAnagraficService) { }

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response) => {
      this.users = response;
      this.filterUsers = this.users
    })
  }

  onEdit(id:any){
    let edituser = this.users.filter(function (user) {
      return user.id == id;
    });
    this.editAnagraficService.editUser = edituser
  }

  onDelete(id: any) {
    this.users = this.users.filter(function (user) {
      return user.id !== id;
    });
    this.filterUsers = this.users    
    this.rs.deleteUsers(id).subscribe();
  }

  key: string = 'firstName';
  sort(keyy: string) {
    if (this.key === keyy)
      this.key = '-' + keyy
    else
      this.key = keyy
  }

  search(filter: any) {
    this.filter = filter
    if (this.filter == "") {
      this.ngOnInit()
    } else {
      this.filterUsers = this.users.filter(res => {
        return res.firstName.toLocaleLowerCase().match(this.filter.toLocaleLowerCase())
          || res.lastName.toLocaleLowerCase().match(this.filter.toLocaleLowerCase())
          || res.email.toLocaleLowerCase().match(this.filter.toLocaleLowerCase())
          || res.city.toLocaleLowerCase().match(this.filter.toLocaleLowerCase())
      })
    }
  }
}

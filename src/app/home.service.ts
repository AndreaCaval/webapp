import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3000/Users'

  public getUsers() {
    return this.http.get<User[]>(this.url)
  }

  public deleteUsers(id: number) {
    return this.http.delete('http://localhost:3000/Users/' + id);
  }

  public newUsers(user: User[]) {
    return this.http.post('http://localhost:3000/Users', user);
  }

  public updateUser(id: any, user: User[]) {
    return this.http.put('http://localhost:3000/Users/' + id, user);
  }
}

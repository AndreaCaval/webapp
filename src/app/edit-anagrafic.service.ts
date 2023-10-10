import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class EditAnagraficService {

  constructor() { }

  editUser!: User[];
}

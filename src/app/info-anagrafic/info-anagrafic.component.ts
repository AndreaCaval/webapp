import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { EditAnagraficService } from '../edit-anagrafic.service';

@Component({
  selector: 'app-info-anagrafic',
  templateUrl: './info-anagrafic.component.html',
  styleUrls: ['./info-anagrafic.component.css']
})
export class InfoAnagraficComponent implements OnInit {

  infoUser!: User[];
  infoU!: User[];

  constructor(private editAnagraficService: EditAnagraficService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = null
    this.route.paramMap.subscribe(value => {
      id = value.get('id')
    })
    this.infoUser = this.editAnagraficService.editUser
    
    if (this.infoUser != undefined && id != null) {
      localStorage.setItem('infoUser', JSON.stringify(this.infoUser))
    }
    else {
      let d = JSON.parse(localStorage.getItem('infoUser')!) 
      this.infoUser = d      
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { RolService } from '../services/rol.service';
import { rol } from '../classes/rol';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  rols: rol[];
  class:string='All';

  constructor(private RolService: RolService) { }

  ngOnInit() {
    this.RolService.getItems().subscribe(
      rols => this.rols = rols
    );
  }

  setAll(){
    this.class='All';
  }

  setEvil(){
    this.class='Maldad';
  }

  setVillage(){
    this.class='Aldea';
  }

  setOther(){
    this.class='Otro';
  }

}
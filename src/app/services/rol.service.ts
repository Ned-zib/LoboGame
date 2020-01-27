import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ROL } from '../services/rol.json';
import { rol } from '../classes/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor() { }

  getItems(): Observable<rol[]>{
    return of(ROL);
  }

}

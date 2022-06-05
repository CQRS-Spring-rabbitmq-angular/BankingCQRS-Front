import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private broadCastMessage =new BehaviorSubject<String>("IM a first broadcast");
broadcast=this.broadCastMessage.asObservable();
  constructor() { }
}

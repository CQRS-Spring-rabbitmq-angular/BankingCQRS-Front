import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor() { }
  private subject = new BehaviorSubject<string>("");

    sendMessage(message: string) {
        this.subject.next(message);
    }

    clearMessages() {
        this.subject.next("");
    }

    onMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}

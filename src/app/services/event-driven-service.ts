import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
@Injectable({
    providedIn: 'root'
  })
export class EventDrivenService {
    sourceEventSubject= new BehaviorSubject<string>("");
    sourceEventSubjectObservable=this.sourceEventSubject.asObservable();
    publishEvent(event:string)
    {

        this.sourceEventSubject.next(event);
    }
    clearMessages() {
        this.sourceEventSubject.next("");
    }
}

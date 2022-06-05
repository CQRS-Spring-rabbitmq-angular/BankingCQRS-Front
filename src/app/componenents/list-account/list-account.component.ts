import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/Account';
import { AccountService } from 'src/app/services/account.service';
import { EventDrivenService } from 'src/app/services/event-driven-service';
import { MessageServiceService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
  notification:boolean=false;
  notificationMessage:String="";
  constructor(private httpAccount : AccountService,
    private router:Router,
    private eventService:EventDrivenService,
    private messageService: MessageServiceService) {
      
     }
Accounts:Account[]|null=null;




closeAlert() {
  //this.alert.nativeElement.classList.remove('show');
}
  ngOnInit(): void {
this.httpAccount.getAllAccount().subscribe(
  (response)=>{console.log(response);this.Accounts=response },
  (error)=>console.log("error"+error)
);
this.eventService.sourceEventSubject.subscribe(
  (data)=>{
    if(data !="")
{    this.notificationMessage=data; 
this.notification=true;
}}
);
  }
  onOperation(account:any)
  {
    this.eventService.publishEvent(account.id);
    
    
  }
  closenotification()
  {
    this.notification=false;
  }
  
  sendMessage(idaccountop:string): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(idaccountop);
}
}

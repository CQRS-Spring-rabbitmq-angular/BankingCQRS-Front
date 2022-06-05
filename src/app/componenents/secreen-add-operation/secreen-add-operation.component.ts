import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AccountDetail } from 'src/app/models/AccountDetail';
import { AccountService } from 'src/app/services/account.service';
import { EventDrivenService } from 'src/app/services/event-driven-service';
import { MessageServiceService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-secreen-add-operation',
  templateUrl: './secreen-add-operation.component.html',
  styleUrls: ['./secreen-add-operation.component.css']
})
export class SecreenAddOperationComponent implements OnInit {
 
  idAccount:string="";
  screenState="Loading";
  errorMessage="";

  
  _account :any ;
  OperationType:String|null=null;
  


  


  constructor(private httpaccount:AccountService,private router :ActivatedRoute,
    private eventService:EventDrivenService,private messageService: MessageServiceService
    ) {

      this.eventService.sourceEventSubjectObservable.subscribe((accountId:string)=>{
        this.idAccount=accountId;
        this.getAccount(this.idAccount);

        });
     }
  
  ngOnInit(): void {
    this.OperationType=this.router.snapshot.params.OperationType;
    
    

 
      }
    
      private getAccount(id:string){
        
        
        this.httpaccount.getAccountById(id).subscribe(
          (response)=>{this._account=response; this.screenState="Loaded";},
          (error)=>{
            
            this.screenState="Error";
            this.errorMessage="No Account Found "+ console.error();
          }
        );
    
      }
      sendMessage(idaccountop:string): void {
        // send message to subscribers via observable subject
        this.messageService.sendMessage(idaccountop);
    }
}

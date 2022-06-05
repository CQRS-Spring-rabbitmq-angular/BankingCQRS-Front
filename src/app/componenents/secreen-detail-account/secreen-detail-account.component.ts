import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDetail } from 'src/app/models/AccountDetail';
import { AccountService } from 'src/app/services/account.service';
import { EventDrivenService } from 'src/app/services/event-driven-service';

@Component({
  selector: 'app-secreen-detail-account',
  templateUrl: './secreen-detail-account.component.html',
  styleUrls: ['./secreen-detail-account.component.css']
})
export class SecreenDetailAccountComponent implements OnInit {
idAccount:String="5311e34b-344c-4e56-8dfa-8ddfb71934bc"
_account :AccountDetail|null=null;
account$:Observable<AccountDetail>|null=null;
  constructor(private httpaccount:AccountService,private eventService:EventDrivenService) { 

    this.eventService.sourceEventSubjectObservable.subscribe((accountId:string)=>{
      this.idAccount=accountId;
      this.getAccount(this.idAccount);

      });
  }

  ngOnInit(): void {

  }

  private getAccount(id:String){
    
  
    this.httpaccount.getAccountById(this.idAccount).subscribe(
      (response)=>{this._account=response;
      
      },
      (error)=>{alert("error: "+error)}
    );

  }
}

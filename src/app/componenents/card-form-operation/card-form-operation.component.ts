import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { EventDrivenService } from 'src/app/services/event-driven-service';

@Component({
  selector: 'app-card-form-operation',
  templateUrl: './card-form-operation.component.html',
  styleUrls: ['./card-form-operation.component.css']
})
export class CardFormOperationComponent implements OnInit {
@Input() AccountId:String="";
@Input() OperationType:String="";
formGroupOperation?:FormGroup;
  //router: any;
  constructor(private router: Router,
    private fb:FormBuilder,
    private httpAccount:AccountService,
    private messaging :EventDrivenService
   
    ) { 

    }

  ngOnInit(): void {


this.formGroupOperation =this.fb.group(
  { amount:['',Validators.required],
  currency:['',Validators.required],

});


  }
  onSaveOperation(){
    if(this.formGroupOperation?.invalid) return;
    switch (this.OperationType) {
      case "Debit":
        this.httpAccount.newDebitOperation(this.AccountId,this.formGroupOperation?.value)
    .subscribe(data=>{
      this.messaging.publishEvent("Debit Account Success");
      this.router.navigate(['/']);
    //alert("Success Account Debit");
    },
    (error)=>{
      alert("Error Debit Operation : "+error);
      
      }
    );
        break;
        case "Credit":
          this.httpAccount.newCreditOperation(this.AccountId,this.formGroupOperation?.value)
          .subscribe(data=>{
            this.messaging.publishEvent("Credi Account Success");
            this.router.navigate(['/']);
         // alert("Success Account Credit");
          },
          (error)=>{
            alert("Error Credit Operation : "+error);
            
            }
          );
          break;
      default:
        break;
    }
    
    
      
    
  }
}

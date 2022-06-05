
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountForm } from 'src/app/models/AccountForm';
import { AccountService } from 'src/app/services/account.service';
import { EventDrivenService } from 'src/app/services/event-driven-service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  prodFormGr?:FormGroup; 
  newAccount?:AccountForm;
  constructor(private httpAccount:AccountService,
    private messaging: EventDrivenService,
    private fb :FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.prodFormGr =this.fb.group(
      { proprietaire:['',Validators.required],
      initialbalance:['',Validators.required],
      currency:['',Validators.required],
    })
    
  }
  onSaveAccount()
  {
    if(this.prodFormGr?.invalid) return;
    console.log("formgroupvalue");
   /* this.newAccount=new AccountForm(this.prodFormGr?.value.initialbalance,
      this.prodFormGr?.value.currency,
      this.prodFormGr?.value.proprietaire);*/
//this.newAccount=this.prodFormGr?.value;
//this.newAccount.currency=this.prodFormGr.value.currency;
    console.log(this.newAccount);
    this.httpAccount.newAccount(this.prodFormGr?.value)
.subscribe(data=>{
  this.messaging.publishEvent("Creation Account Success");
  this.router.navigate(['/'])
//alert("Success Account updated");
});

  }
}

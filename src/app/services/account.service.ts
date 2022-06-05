import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../models/Account';
import { AccountDetail } from '../models/AccountDetail';
import { AccountForm } from '../models/AccountForm';
import { Operation } from '../models/Operation';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
_queryURL=environment._queryapiUrl;
_cmdURL=environment._cmdapiUrl;
  constructor(private http:HttpClient) { }
  public getAllAccount():Observable<Account[]>{
    console.log("getting all account ...");
    console.log("Connecting to server "+this._queryURL);
    return this.http.get<Account[]>(this._queryURL+"/AllAccount");
  }
  public getAccountById(id:String):Observable<AccountDetail>
  {
    return this.http.get<AccountDetail>(this._queryURL+"/Account/"+id);
  }
  public newAccount(newaccount:AccountForm):Observable<String>{
    console.log(newaccount);
    return this.http.post<String>(this._cmdURL+"/createAccount",newaccount);
  }
  public newCreditOperation(idAccount:String,operation :Operation):Observable<String>{
  
    return this.http.post<String>(this._cmdURL+"/credit/"+idAccount,operation);
  }
  public newDebitOperation(idAccount:String,operation :Operation):Observable<String>{
  
    return this.http.post<String>(this._cmdURL+"/debit/"+idAccount,operation);
  }
}

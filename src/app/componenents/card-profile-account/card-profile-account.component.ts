import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/models/Account';

@Component({
  selector: 'app-card-profile-account',
  templateUrl: './card-profile-account.component.html',
  styleUrls: ['./card-profile-account.component.css']
})
export class CardProfileAccountComponent implements OnInit {
@Input() _account : Account|null=null;
  constructor() { }

  ngOnInit(): void {
    console.log(this._account);
  }

}

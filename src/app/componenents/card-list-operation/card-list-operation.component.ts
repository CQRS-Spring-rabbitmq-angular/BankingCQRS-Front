import { Component, Input, OnInit } from '@angular/core';
import { Operation } from 'src/app/models/Operation';

@Component({
  selector: 'app-card-list-operation',
  templateUrl: './card-list-operation.component.html',
  styleUrls: ['./card-list-operation.component.css']
})
export class CardListOperationComponent implements OnInit {
  @Input() _operations? : Operation[];
  constructor() { }

  ngOnInit(): void {
    console.log(this._operations);
  }

}

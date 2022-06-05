import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAccountComponent } from './componenents/list-account/list-account.component';
import { NewAccountComponent } from './componenents/new-account/new-account.component';
import { SecreenAddOperationComponent } from './componenents/secreen-add-operation/secreen-add-operation.component';
import { SecreenDetailAccountComponent } from './componenents/secreen-detail-account/secreen-detail-account.component';

const routes: Routes = [
  {path:'',pathMatch: 'full',component:ListAccountComponent},
  {path:'create-account',component:NewAccountComponent},
  {path:'account-detail',component:SecreenDetailAccountComponent},
  {path:'new-operation/:OperationType',component:SecreenAddOperationComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

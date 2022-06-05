import { Account } from "./Account";
import { Operation } from "./Operation";

export interface AccountDetail
{
    account :Account;
    operations?:Operation[];
}
import { AnyARecord } from "dns";
import { AccountActionsTypes } from "./AccountActionsTypes";

export interface ActionEvent {
    type: AccountActionsTypes,
    payload?: any,


}
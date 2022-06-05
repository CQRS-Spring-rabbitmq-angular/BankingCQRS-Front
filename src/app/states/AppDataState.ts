import { DataStateEnum } from "./DataStateEnum";

export interface AppDataState<T> {
    dataState: DataStateEnum,//l'etat de donne loading loaded ,error
    data?: T,
    errorMessage?: String,
}
import { createAction, props } from "@ngrx/store";

export const increment =createAction('increment')
export const decrement =createAction('decrement')
export const reset =createAction('reset')
export const coustomIncrement=createAction('coustomIncrement',props<{value:number}>())
export const changechannelname=createAction('changechannelname')
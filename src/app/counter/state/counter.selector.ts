import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterstate } from "./counter.state";

const getCounterSate=createFeatureSelector<counterstate>('counter')

export const getCounter=createSelector(getCounterSate,(state)=>
{
    return state.counter
})

export const getchannalname=createSelector(getCounterSate,(state)=>
{
    return state.channelname
})

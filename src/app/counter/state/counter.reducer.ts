import { Action, createReducer, on } from "@ngrx/store";
import { initialstate, counterstate } from "./counter.state";
import { changechannelname, coustomIncrement, decrement, increment, reset } from "./counter.action";

const _counterReducer = createReducer(
    initialstate,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }),
    on(decrement,(state) => {
        return {
            ...state,
            counter: state.counter - 1,
        }
    }),
    on(reset,(state) => {
        return {
            ...state,
            counter: 0,
        }
    }),
    on(coustomIncrement,(state,action) => {
        return {
            ...state,
            counter:state.counter+action.value,
            
        }
    }),
    on(changechannelname,(state,action) => {
        return {
...state,
channelname:'changed srikanth',
        }}
        )
);

export function counterReducer(state: counterstate = initialstate, action: Action) {
    return _counterReducer(state, action);
}

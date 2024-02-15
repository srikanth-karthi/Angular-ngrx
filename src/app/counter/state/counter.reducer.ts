import { Action, createReducer, on } from "@ngrx/store";
import { initialstate } from "./counter.state";
import { decrement, increment, reset } from "./counter.action";

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
);

export function counterReducer(state: { counter: number; } = initialstate, action: Action) {
    return _counterReducer(state, action);
}

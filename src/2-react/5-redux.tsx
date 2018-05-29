import * as React from 'react'
import { connect } from 'react-redux'
import { createStore, combineReducers, ActionCreatorsMapObject, AnyAction, Reducer } from 'redux'

type Include<T, U> = T extends U ? T : never

type State = { val1: number, val2: string }

const INC_VAL1 = 'INC_VAL1'
const DEC_VAL1 = 'DEC_VAL1'
const SET_VAL2 = 'SET_VAL2'

// Connect Component
{
    class Component extends React.PureComponent<{ value: number, inc: () => any, dec: () => any }> {
        render() {
            return null
        }
    }

    @connect(
        ({ val1 }: State) => ({ value: val1 }),
        { inc: () => ({ type: INC_VAL1 }), dec: () => ({ type: DEC_VAL1 }) },
    )
    class DecoratedComponent extends React.PureComponent<{ value: number, inc: () => any, dec: () => any }> {
        render() {
            return null
        }
    }

    const ConnectedComponent = connect(
        ({ val1 }: State) => ({ value: val1 }),
        { inc: () => ({ type: INC_VAL1 }), dec: () => ({ type: DEC_VAL1 }) },
    )(Component)

    const content = (
        <div>
            <Component />
            <ConnectedComponent />
        </div>
    )
}

// Reducers, actions from action-creators
{
    const handleActions = <State extends any>(initialState: State) =>
        <Action extends { type: string }>(reducerMap: { [Key in Action['type']]?: (state: State, action: Include<Action, { type: Key }>) => State }): Reducer<State> =>
            (state, action) => {
                if (state === undefined) {
                    return initialState
                }
                const reducer = reducerMap[action.type as Action['type']]
                if (reducer) {
                    return reducer(state, action as any)
                } else {
                    return state
                }
            }

    function createAction<Type extends string>(type: Type): { type: Type }
    function createAction<Type extends string, Payload>(type: Type, payload: Payload): { type: Type, payload: Payload }
    function createAction<Type extends string, Payload>(type: Type, payload?: Payload) {
        return payload === undefined ? { type } : { type, payload }
    }

    const actionCreators = {
        incVal1: () => createAction(INC_VAL1),
        decVal1: () => createAction(DEC_VAL1),
        setVal2: (value: string) => createAction(SET_VAL2, value),
    }

    type Action = ReturnType<typeof actionCreators[keyof typeof actionCreators]>

    const store = createStore(combineReducers({
        val1: handleActions(0)<Action>({
            [INC_VAL1]: (state) => state + 1,
            [DEC_VAL1]: (state) => state - 1,
        }),
        val2: handleActions('')<Action>({
            [SET_VAL2]: (state, { payload }) => payload,
        }),
    }))
}

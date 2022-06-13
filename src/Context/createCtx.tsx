import type { Dispatch, Reducer, PropsWithChildren } from "react";
import { createContext, useReducer } from "react";

import type { initialStateType } from "./initialState";
import { initialState } from "./initialState";
import reducer from "./reducer";

function createCtx<ActionType>(
  reducer: Reducer<initialStateType, ActionType>,
  initialState: initialStateType
) {
  const defaultDispatch: Dispatch<ActionType> = () => initialState;
  const ctx = createContext({
    state: initialState,
    dispatch: defaultDispatch,
  });
  const Provider = (props: PropsWithChildren) => {
    const [state, dispatch] = useReducer<Reducer<initialStateType, ActionType>>(
      reducer,
      initialState
    );
    return <ctx.Provider value={{ state, dispatch }} {...props} />;
  };
  return [ctx, Provider] as const;
}

// function createCtx<StateType, ActionType>(
//   reducer: Reducer<StateType, ActionType>,
//   initialState: StateType
// ) {
//   const defaultDispatch: Dispatch<ActionType> = () => initialState;
//   const ctx = createContext({
//     state: initialState,
//     dispatch: defaultDispatch,
//   });
//   const Provider = (props: PropsWithChildren<initialStateType>) => {
//     const [state, dispatch] = useReducer<Reducer<StateType, ActionType>>(
//       reducer,
//       initialState
//     );
//     return <ctx.Provider value={{ state, dispatch }} {...props} />;
//   };
//   return [ctx, Provider] as const;
// }

const [context, Provider] = createCtx(reducer, initialState);

export { context, Provider };

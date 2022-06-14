import type { Dispatch, Reducer, PropsWithChildren } from "react";
import { createContext, useReducer } from "react";

import type { initialStateType } from "./initialState";

export default function createCtx<ActionType>(
  reducer: Reducer<initialStateType, ActionType>,
  initialState: initialStateType
) {
  const defaultDispatch: Dispatch<ActionType> = () => initialState;
  const context = createContext({
    state: initialState,
    dispatch: defaultDispatch,
  });
  const Provider = (props: PropsWithChildren) => {
    const [state, dispatch] = useReducer<Reducer<initialStateType, ActionType>>(
      reducer,
      initialState
    );
    return <context.Provider value={{ state, dispatch }} {...props} />;
  };
  return [context, Provider] as const;
}

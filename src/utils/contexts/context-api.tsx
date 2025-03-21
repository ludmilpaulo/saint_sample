/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { createContext, Dispatch, useReducer } from "react";
import { storeReducer } from "./reducer";
import { StateType } from "@/types/type.context";
// defining types
interface Props {
  children: React.ReactNode;
}
interface ContextProps {
  state: StateType;
  dispatch: Dispatch<any>;
}
// defining initial state
const initialState: StateType = {
  // variables
  darkMode: false,
};
// creating context
export const ContextStore = createContext<ContextProps>({
  state: initialState,
  dispatch: () => {},
});

export const StoreProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  const values: ContextProps = { state, dispatch };
  return (
    <ContextStore.Provider value={values}>{children}</ContextStore.Provider>
  );
};

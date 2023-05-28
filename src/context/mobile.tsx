import React, { useContext } from 'react';
import { contextDispatch_setMobile } from './actionKey';

interface Action {
  type: string;
  payload: boolean;
}

const initState = false;

export function MobileContextReducer(state:boolean, action:any) {
  switch(action.type) {
    case contextDispatch_setMobile: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default function MobileContext() {
  
  const ctx = React.createContext<{
    state: boolean,
    dispatch: React.Dispatch<Action>,
  }>({
    state: false,
    dispatch: () => null
  });

  const useCtx = () => {
    return useContext(ctx);
  }

  return [
    useCtx,
    ctx.Provider,
    initState
  ] as const;
}

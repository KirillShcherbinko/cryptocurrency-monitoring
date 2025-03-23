import { ICryptoParams } from "../types";

type Action = { 
  type: 'updateParams'; 
  payload: Partial<ICryptoParams>;
};


interface ICryptoState {
  params: ICryptoParams;
}

export default function cryptoParamsReducer(state: ICryptoState, action: Action) {
  switch (action.type) {
    case "updateParams":
      return {
        ...state,
        params: { ...state.params, ...action.payload },
      };
    default:
      return state;
  }
}
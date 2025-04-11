import { ICryptoParams } from "../types";

type Action = { 
  type: 'updateParams'; 
  payload: Partial<ICryptoParams>;
};


export default function cryptoParamsReducer(state: ICryptoParams, action: Action) {
  switch (action.type) {
    case "updateParams":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
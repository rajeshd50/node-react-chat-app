import { ACTIONS } from '../../config'
import { ActionExtended } from '../../_common/interfaces/ActionExtended';

export interface GlobalReducer {
  loaderShown: boolean;
  device: "mobile" | "tab" | "desktop" | null
}

const initialState : GlobalReducer = {
  loaderShown: false,
  device: null,
};

const globalReducer = (state = initialState, action: ActionExtended) => {
  switch (action.type) {
    case ACTIONS.GLOBAL.SET_LOADER:
      return {
        ...state,
        loaderShown: action.payload,
      };
    case ACTIONS.GLOBAL.SET_DEVICE:
      return {
        ...state,
        device: action.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;

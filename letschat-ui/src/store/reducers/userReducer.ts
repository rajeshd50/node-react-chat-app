import { ACTIONS } from '../../config'
import { ActionExtended } from '../../_common/interfaces/ActionExtended';
import { Friends } from '../../_common/interfaces/models/firends';
import { User } from '../../_common/interfaces/models/user';

export interface UserReducer {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: UserReducer = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const userReducer = (state = initialState, action: ActionExtended) => {
  switch (action.type) {
    case ACTIONS.USER.LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
      };
    case ACTIONS.USER.LOGOUT:
      return {
        ...state,
        ...initialState,
      };
    case ACTIONS.USER.DETAILS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

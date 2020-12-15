import { ACTIONS } from '../../config'
import { ActionExtended } from '../../_common/interfaces/ActionExtended';
import { ChatMessage } from '../../_common/interfaces/models/chatMessage';
import { Friends } from '../../_common/interfaces/models/firends';
import { SearchUser } from '../../_common/interfaces/models/searchUser';
import { User } from '../../_common/interfaces/models/user';

export type FriendOrSearchUser =  Friends | SearchUser

export interface MessageReducer {
  list: ChatMessage[];
  total: number;
  limit: number;
  offset: number;
  selectedUser: FriendOrSearchUser | null;
  friends: Friends[];
}

const initialState: MessageReducer = {
  list: [],
  friends: [],
  total: 0,
  limit: 0,
  offset: 0,
  selectedUser: null,
};

const messageReducer = (state = initialState, action: ActionExtended) => {
  switch (action.type) {
    case ACTIONS.USER.LOGOUT:
      return {
        ...state,
        ...initialState,
      };
    case ACTIONS.MESSAGE.LIST:
      return {
        ...state,
        list: action.payload.messages.reverse(),
        total: action.payload.total,
        limit: action.payload.limit,
        offset: action.payload.offset,
      };
    case ACTIONS.MESSAGE.RESET_LIST:
      return {
        ...state,
        list: [],
        total: 0,
        limit: 0,
        offset: 0,
      };
    case ACTIONS.MESSAGE.APPEND_NEW:
      let newArr = state.list
      if (action.payload.id) {
        let find = state.list.findIndex(x => x.id == action.payload.id)
        if (find < 0) {
          newArr.push(action.payload)
        }
      } else {
        newArr.push(action.payload)
      }
      return {
        ...state,
        list: JSON.parse(JSON.stringify(newArr)),
        total: state.total + 1,
      };
    case ACTIONS.MESSAGE.SET_LIMIT:
      return {
        ...state,
        limit: action.payload,
      }
    case ACTIONS.MESSAGE.SET_OFFSET:
      return {
        ...state,
        offset: action.payload,
      }
    case ACTIONS.MESSAGE.SET_TOTAL:
      return {
        ...state,
        total: action.payload,
      }
    case ACTIONS.MESSAGE.SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      }
    case ACTIONS.MESSAGE.FRIENDS:
        return {
          ...state,
          friends: action.payload,
        };
    case ACTIONS.MESSAGE.RESET_FRIENDS:
        return {
          ...state,
          friends: [],
        };
    case ACTIONS.MESSAGE.SET_FRIENDS:
        return {
          ...state,
          friends: action.payload,
        };
    default:
      return state;
  }
};

export default messageReducer;

import { combineReducers } from 'redux';

import userReducer from './userReducer'
import globalReducer from './globalReducer'
import messageReducer from './messageReducer'

const rootReducer = combineReducers({
  user: userReducer,
  global: globalReducer,
  message: messageReducer,
})

export default rootReducer
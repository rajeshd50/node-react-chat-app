import { DefaultRootState } from 'react-redux';
import { GlobalReducer } from '../../store/reducers/globalReducer';
import { MessageReducer } from '../../store/reducers/messageReducer';
import { UserReducer } from '../../store/reducers/userReducer';
 

export interface StateExtended extends DefaultRootState {
  user: UserReducer;
  global: GlobalReducer;
  message: MessageReducer;
}
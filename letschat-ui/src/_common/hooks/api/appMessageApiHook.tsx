import { SAGA_ACTIONS } from '../../../config'
import { MessageSendReq, MessageListReq } from '../../interfaces/ApiReqRes';
import { useApiCall } from './appApiCallHook'

export function useMessageApi() {

  const callApi = useApiCall()

  const send = (data: MessageSendReq, onSuccess: Function, onError: Function) => {
    callApi(SAGA_ACTIONS.MESSAGE.SEND, data, onSuccess, onError);
  }
  const list = (data: MessageListReq, onSuccess: Function, onError: Function) => {
    callApi(SAGA_ACTIONS.MESSAGE.LIST, data, onSuccess, onError);
  }
  const getFriendList = (onSuccess: Function, onError: Function) => {
    callApi(SAGA_ACTIONS.MESSAGE.FRIENDS, null, onSuccess, onError);
  }

  return {
    callDoSend: send,
    callGetList: list,
    callGetFriendList: getFriendList,
  }
}
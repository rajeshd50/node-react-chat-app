import { useDispatch } from 'react-redux'
import { ACTIONS } from '../../../config'
import { FriendOrSearchUser } from '../../../store/reducers/messageReducer'
import { Friends } from '../../interfaces/models/firends'
import { SearchUser } from '../../interfaces/models/searchUser'

export function useAppMessageAction() {

  const dispatch = useDispatch()

  
  /**
   * append new message in redux
   * @param data message
   */
  const appendNewMessage = (data: any) => {
    dispatch({
      type: ACTIONS.MESSAGE.APPEND_NEW,
      payload: data,
    })
  }
  /**
   * reset message list
   */
  const resetList = () => {
    dispatch({
      type: ACTIONS.MESSAGE.RESET_LIST,
      payload: null,
    })
  }
  /**
   * set message list fetch limit
   * @param data number
   */
  const setLimit = (data: number) => {
    dispatch({
      type: ACTIONS.MESSAGE.SET_LIMIT,
      payload: data,
    })
  }
  /**
   * set message list fetch offset - used for paginating
   * @param data number
   */
  const setOffset = (data: number) => {
    dispatch({
      type: ACTIONS.MESSAGE.SET_OFFSET,
      payload: data,
    })
  }
  /**
   * set message list total count
   * @param data number
   */
  const setTotal = (data: number) => {
    dispatch({
      type: ACTIONS.MESSAGE.SET_TOTAL,
      payload: data,
    })
  }
  /**
   * set current user for chat
   * @param data user
   */
  const setSelectedUser = (data: FriendOrSearchUser) => {
    dispatch({
      type: ACTIONS.MESSAGE.SET_SELECTED_USER,
      payload: data,
    })
  }
  /**
   * reset user friend list array
   */
  const resetUserFriendList = () => {
    dispatch({
      type: ACTIONS.MESSAGE.RESET_FRIENDS,
      payload: null,
    })
  }
  /**
   * set user friend list
   * @param data Friends array
   */
  const setUserFriendList = (data: Friends[]) => {
    dispatch({
      type: ACTIONS.MESSAGE.SET_FRIENDS,
      payload: data,
    })
  }

  return {
    appendNewMessage,
    resetList,
    setLimit,
    setOffset,
    setTotal,
    setSelectedUser,
    resetUserFriendList,
    setUserFriendList,
  }
}
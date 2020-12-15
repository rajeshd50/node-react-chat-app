import { fork, take, takeLatest, all, takeEvery, takeLeading } from 'redux-saga/effects';
import { SAGA_ACTIONS } from '../config';

import {
  loginUser,
  logout,
  registerUser,
  userDetails,
  searchUser,
  uploadProfilePic,
} from './user.saga'

import {
  sendMessage,
  getUserMessages,
  getFriendsList,
} from './message.saga'

export function* sagas() {
  yield all([
    // user saga
    takeLatest(SAGA_ACTIONS.USER.LOGIN, loginUser),
    takeLatest(SAGA_ACTIONS.USER.LOGOUT, logout),
    takeLatest(SAGA_ACTIONS.USER.REGISTER, registerUser),
    takeLatest(SAGA_ACTIONS.USER.DETAILS, userDetails),
    takeLatest(SAGA_ACTIONS.USER.SEARCH, searchUser),
    takeLatest(SAGA_ACTIONS.USER.UPLOAD_PROFILE_PICTURE, uploadProfilePic),

    // message saga
    takeLatest(SAGA_ACTIONS.MESSAGE.SEND, sendMessage),
    takeLatest(SAGA_ACTIONS.MESSAGE.LIST, getUserMessages),
    takeLatest(SAGA_ACTIONS.MESSAGE.FRIENDS, getFriendsList),
  ])
}
import { call, put } from 'redux-saga/effects';
import { ACTIONS, API_URLS, SAGA_ACTIONS, STORAGE } from '../config';
import { CallApi } from './__callApi';

export function* getUserMessages(action: any) {
  try {
    const data = action.payload;
    const resp = yield call(CallApi.GET, API_URLS.MESSAGE.LIST, data, true);
    if (resp.status >= 200 && resp.status < 300 && resp.data && resp.data.success) {
      yield put({
        type: ACTIONS.MESSAGE.LIST,
        payload: resp.data.data,
      })
      action && action.callbackSuccess && action.callbackSuccess(resp.data);
    } else {
      action && action.callbackError && action.callbackError(resp.data);
    }
  } catch (e) {
    action && action.callbackError && action.callbackError(e && e.data ? e.data : e);
  }
}

export function* sendMessage(action: any) {
  try {
    const data = action.payload;
    const resp = yield call(CallApi.POST, API_URLS.MESSAGE.SEND, data, true);
    if (resp.status >= 200 && resp.status < 300 && resp.data && resp.data.success) {
      action && action.callbackSuccess && action.callbackSuccess(resp.data);
    } else {
      action && action.callbackError && action.callbackError(resp.data);
    }
  } catch (e) {
    action && action.callbackError && action.callbackError(e && e.data ? e.data : e);
  }
}

export function* getFriendsList(action: any) {
  try {
    const data = action.payload;
    const resp = yield call(CallApi.GET, API_URLS.MESSAGE.FRIENDS, data, true);
    if (resp.status >= 200 && resp.status < 300 && resp.data && resp.data.success) {
      yield put({
        type: ACTIONS.MESSAGE.FRIENDS,
        payload: resp.data.data,
      })
      action && action.callbackSuccess && action.callbackSuccess(resp.data);
    } else {
      action && action.callbackError && action.callbackError(resp.data);
    }
  } catch (e) {
    action && action.callbackError && action.callbackError(e && e.data ? e.data : e);
  }
}
import { call, put } from 'redux-saga/effects';
import { ACTIONS, API_URLS, SAGA_ACTIONS, STORAGE } from '../config';
import { CallApi } from './__callApi';

export function* loginUser(action: any) {
  try {
    const data = action.payload;
    const resp = yield call(CallApi.POST, API_URLS.USER.LOGIN, data);
    if (resp.status >= 200 && resp.status < 300 && resp.data && resp.data.data && resp.data.success) {
      localStorage.setItem(STORAGE, resp.data.data.token);
      yield put({
        type: ACTIONS.USER.LOGIN,
        payload: {
          user: resp.data.data.user_details,
          token: resp.data.data.token,
        }
      })
      yield put({
        type: SAGA_ACTIONS.USER.DETAILS,
        payload: null,
        callbackSuccess: () => {},
        callbackError: () => {}
      })
      action && action.callbackSuccess && action.callbackSuccess(resp.data);
    } else {
      action && action.callbackError && action.callbackError(resp.data);
    }
  } catch (e) {
    action && action.callbackError && action.callbackError(e && e.data ? e.data : e);
  }
}

export function* registerUser(action: any) {
  try {
    const data = action.payload;
    const resp = yield call(CallApi.POST, API_URLS.USER.REGISTER, data);
    if (resp.status >= 200 && resp.status < 300 && resp.data && resp.data.data && resp.data.success) {
      localStorage.setItem(STORAGE, resp.data.data.token);
      yield put({
        type: ACTIONS.USER.LOGIN,
        payload: {
          user: resp.data.data.user_details,
          token: resp.data.data.token,
        }
      })
      yield put({
        type: SAGA_ACTIONS.USER.DETAILS,
        payload: null,
        callbackSuccess: () => {},
        callbackError: () => {}
      })
      action && action.callbackSuccess && action.callbackSuccess(resp.data);
    } else {
      action && action.callbackError && action.callbackError(resp.data);
    }
  } catch (e) {
    action && action.callbackError && action.callbackError(e && e.data ? e.data : e);
  }
}

export function* userDetails(action: any) {
  try {
    const data = action.payload;
    const resp = yield call(CallApi.GET, API_URLS.USER.DETAILS, data, true);
    if (resp.status >= 200 && resp.status < 300 && resp.data && resp.data.data && resp.data.success) {
      yield put({
        type: ACTIONS.USER.DETAILS,
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

export function* logout(action: any) {
  try {
    const data = action.payload;
    const resp = yield call(CallApi.POST, API_URLS.USER.LOGOUT, data, true);
    if (resp.status >= 200 && resp.status < 300 && resp.data && resp.data.success) {
      yield put({
        type: ACTIONS.USER.LOGOUT,
        payload: null,
      })
      action && action.callbackSuccess && action.callbackSuccess(resp.data);
    } else {
      action && action.callbackError && action.callbackError(resp.data);
    }
  } catch (e) {
    action && action.callbackError && action.callbackError(e && e.data ? e.data : e);
  }
}

export function* searchUser(action: any) {
  try {
    const data = action.payload;
    const resp = yield call(CallApi.GET, API_URLS.USER.SEARCH, data, true);
    if (resp.status >= 200 && resp.status < 300 && resp.data && resp.data.success) {
      action && action.callbackSuccess && action.callbackSuccess(resp.data);
    } else {
      action && action.callbackError && action.callbackError(resp.data);
    }
  } catch (e) {
    action && action.callbackError && action.callbackError(e && e.data ? e.data : e);
  }
}

export function* uploadProfilePic(action: any) {
  try {
    const data = action.payload;
    const resp = yield call(CallApi.POST, API_URLS.USER.UPLOAD_PROFILE_PICTURE, data, true);
    if (resp.status >= 200 && resp.status < 300 && resp.data && resp.data.success) {
      yield put({
        type: SAGA_ACTIONS.USER.DETAILS,
        payload: null,
        callbackSuccess: () => {
          action && action.callbackSuccess && action.callbackSuccess(resp.data);
        },
        callbackError: () => {
          action && action.callbackSuccess && action.callbackSuccess(resp.data);
        }
      })
    } else {
      action && action.callbackError && action.callbackError(resp.data);
    }
  } catch (e) {
    action && action.callbackError && action.callbackError(e && e.data ? e.data : e);
  }
}
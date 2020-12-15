export const APP_VERSION = process.env.REACT_APP_VERSION
export const APP_STAGE = process.env.REACT_APP_STAGE
export const STORAGE = 'node-react-chat-token'

let apiBaseUrl = 'http://localhost:4000/api/'
let socketBaseUrl = 'ws://localhost:4000/'

if (APP_STAGE == 'prod') {
  apiBaseUrl = 'http://localhost:4000/api/'
  socketBaseUrl = 'ws://localhost:4000/'
}

export const SOCKET_BASE_URL = socketBaseUrl

export const URLS = {
  LOGIN: '/login',
  HOME: '/',
  SIGNUP: '/signup'
}

export const API_URLS = {
  USER: {
    LOGIN: `${apiBaseUrl}auth/login`,
    REGISTER: `${apiBaseUrl}user/register`,
    LOGOUT: `${apiBaseUrl}auth/logout`,
    DETAILS: `${apiBaseUrl}user/profile`,
    UPLOAD_PROFILE_PICTURE: `${apiBaseUrl}user/upload-profile-picture`,
    SEARCH: `${apiBaseUrl}user/search`,
  },
  MESSAGE: {
    SEND: `${apiBaseUrl}message/send`,
    LIST: `${apiBaseUrl}message/list`,
    FRIENDS: `${apiBaseUrl}message/friends`,
  },
}
export const ACTIONS = {
  GLOBAL: {
    SET_LOADER: 'ACTIONS/GLOBAL/SET_LOADER',
    SET_DEVICE: 'ACTIONS/GLOBAL/SET_DEVICE',
  },
  USER: {
    LOGIN: 'ACTIONS/USER/LOGIN',
    LOGOUT: 'ACTIONS/USER/LOGOUT',
    DETAILS: 'ACTIONS/USER/DETAILS',
  },
  MESSAGE: {
    LIST: 'ACTIONS/MESSAGE/LIST',
    APPEND_NEW: 'ACTIONS/MESSAGE/APPEND_NEW',
    RESET_LIST: 'ACTIONS/MESSAGE/RESET_LIST',
    SET_TOTAL: 'ACTIONS/MESSAGE/SET_TOTAL',
    SET_LIMIT: 'ACTIONS/MESSAGE/SET_LIMIT',
    SET_OFFSET: 'ACTIONS/MESSAGE/SET_OFFSET',
    SET_SELECTED_USER: 'ACTIONS/MESSAGE/SET_SELECTED_USER',
    FRIENDS: 'ACTIONS/MESSAGE/FRIENDS',
    RESET_FRIENDS: 'ACTIONS/MESSAGE/RESET_FRIENDS',
    SET_FRIENDS: 'ACTIONS/MESSAGE/SET_FRIENDS',
  },
}
export const SAGA_ACTIONS = {
  USER: {
    LOGIN: 'SAGA_ACTIONS/USER/LOGIN',
    LOGOUT: 'SAGA_ACTIONS/USER/LOGOUT',
    DETAILS: 'SAGA_ACTIONS/USER/DETAILS',
    REGISTER: 'SAGA_ACTIONS/USER/REGISTER',
    SEARCH: 'SAGA_ACTIONS/USER/SEARCH',
    UPLOAD_PROFILE_PICTURE: 'SAGA_ACTIONS/USER/UPLOAD_PROFILE_PICTURE',
  },
  MESSAGE: {
    SEND: 'SAGA_ACTIONS/MESSAGE/SEND',
    LIST: 'SAGA_ACTIONS/MESSAGE/LIST',
    FRIENDS: 'SAGA_ACTIONS/MESSAGE/FRIENDS',
  }
}

export const SOCKET_EVENTS = {
  MESSAGE: 'SOCKET_MESSAGE',
  FRIENDS: 'SOCKET_FRIENDS',
}

export * from './functions'
export * from './colors'
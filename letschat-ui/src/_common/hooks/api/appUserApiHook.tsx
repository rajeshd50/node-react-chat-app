import { SAGA_ACTIONS } from '../../../config'
import { LoginReq, RegisterReq, SearchUserReq, UploadProfilePicReq } from '../../interfaces/ApiReqRes';
import { useApiCall } from './appApiCallHook'

export function useUserApi() {

  const callApi = useApiCall()

  const login = (data: LoginReq, onSuccess: Function, onError: Function) => {
    callApi(SAGA_ACTIONS.USER.LOGIN, data, onSuccess, onError);
  }
  const register = (data: RegisterReq, onSuccess: Function, onError: Function) => {
    callApi(SAGA_ACTIONS.USER.REGISTER, data, onSuccess, onError);
  }
  const logout = (onSuccess: Function, onError: Function) => {
    callApi(SAGA_ACTIONS.USER.LOGOUT, null, onSuccess, onError);
  }
  const details = (onSuccess: Function, onError: Function) => {
    callApi(SAGA_ACTIONS.USER.DETAILS, null, onSuccess, onError);
  }
  const uploadProfilePic = (data: UploadProfilePicReq,onSuccess: Function, onError: Function) => {
    callApi(SAGA_ACTIONS.USER.UPLOAD_PROFILE_PICTURE, data, onSuccess, onError);
  }
  const searchUser = (data: SearchUserReq, onSuccess: Function, onError: Function) => {
    callApi(SAGA_ACTIONS.USER.SEARCH, data, onSuccess, onError);
  }

  return {
    callDoLogin: login,
    callDoRegister: register,
    callDoLogout: logout,
    callGetDetails: details,
    callSearchUser: searchUser,
    callUploadProfilePic: uploadProfilePic,
  }
}
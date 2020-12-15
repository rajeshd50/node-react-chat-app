import { useDispatch } from 'react-redux'
import { extractErrorMessage } from '../../../config'
import { useAppGlobalAction } from '../actions/appGlobalActionHook'

export function useApiCall() {

  const dispatch = useDispatch()
  const globalAction = useAppGlobalAction()

  const callApi = (sagaAction: string, dataOrParams: any = {}, callbackSuccess: Function, callbackError: Function) => {
    globalAction.setLoaderStatus(true)
    dispatch({
      type: sagaAction,
      payload: dataOrParams,
      callbackSuccess: (data: any) => {
        let message = data && data.msg ? data.msg: 'Request processed successfully'
        let resp = data && data.data ? data.data : null
        globalAction.setLoaderStatus(false)
        callbackSuccess && callbackSuccess(message, resp)
      },
      callbackError: (error: any) => {
        let message = extractErrorMessage(error, 'Unable to process request, please try again')
        let resp = error && error.data ? error.data : null
        globalAction.setLoaderStatus(false)
        callbackError && callbackError(message, resp)
      }
    })
  }
  return callApi
}
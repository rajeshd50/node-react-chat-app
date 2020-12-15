import { useDispatch } from 'react-redux'
import { ACTIONS } from '../../../config'

export function useAppGlobalAction() {

  const dispatch = useDispatch()

  /**
   * set loader status
   * @param data boolean
   */
  const setLoaderStatus = (data: boolean) => {
    dispatch({
      type: ACTIONS.GLOBAL.SET_LOADER,
      payload: data,
    })
  }
  /**
   * set device = mobile device in redux
   */
  const setDeviceMobile = () => {
    dispatch({
      type: ACTIONS.GLOBAL.SET_DEVICE,
      payload: "mobile",
    })
  }
  /**
   * set device = tab device in redux
   */
  const setDeviceTab = () => {
    dispatch({
      type: ACTIONS.GLOBAL.SET_DEVICE,
      payload: "tab",
    })
  }
  /**
   * set device = desktop device in redux
   */
  const setDeviceDesktop = () => {
    dispatch({
      type: ACTIONS.GLOBAL.SET_DEVICE,
      payload: "desktop",
    })
  }

  return {
    setLoaderStatus,
    setDeviceMobile,
    setDeviceTab,
    setDeviceDesktop,
  }
}
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { StateExtended } from '../../interfaces/StateExtended'


export function useAppGlobalLoaderSelector() {
  const loaderShown = useSelector((state: StateExtended) => state.global.loaderShown)

  return loaderShown
}

export function useAppGlobalIsDeviceMobileSelector() {
  const device = useSelector((state: StateExtended) => state.global.device)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (device == "mobile") {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [device])

  return isMobile
}

export function useAppGlobalIsDeviceTabSelector() {
  const device = useSelector((state: StateExtended) => state.global.device)
  const [isTab, setIsTab] = useState(false)
  useEffect(() => {
    if (device == "tab") {
      setIsTab(true)
    } else {
      setIsTab(false)
    }
  }, [device])

  return isTab
}

export function useAppGlobalIsDeviceDesktopSelector() {
  const device = useSelector((state: StateExtended) => state.global.device)
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    if (device == "desktop") {
      setIsDesktop(true)
    } else {
      setIsDesktop(false)
    }
  }, [device])

  return isDesktop
}
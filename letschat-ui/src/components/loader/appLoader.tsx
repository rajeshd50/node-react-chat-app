import React from 'react'
import Loader from './loader'
import { useAppGlobalLoaderSelector } from '../../_common/hooks/selectors/globalSelectorHook'

function AppLoader() {
  const isLoaderShown = useAppGlobalLoaderSelector()

  if (!isLoaderShown) {
    return null
  }
  return (
    <React.Fragment>
      <Loader/>
    </React.Fragment>
  )
}

export default AppLoader

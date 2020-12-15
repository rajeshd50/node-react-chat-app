import React, { useEffect } from 'react'
import { useAppUserAuthSelector } from '../../_common/hooks/selectors/userSelectorHook'
import HeaderMenu from '../header/header'
import classnames from 'classnames'

function Layout(props: any) {
  const auth = useAppUserAuthSelector()
  const containerClass = classnames({
    'app-container': true,
    'user-auth': auth
  })
  return (
    <React.Fragment>
      <HeaderMenu/>
      <div className={containerClass}>
      {props.children}
      </div>
    </React.Fragment>
  )
}

export default Layout

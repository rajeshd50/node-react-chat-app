import React, { useEffect } from 'react'
import { URLS } from './config';
import { BrowserRouter as Router, Switch, Route, withRouter, HashRouter, Redirect, useHistory } from 'react-router-dom';

import Home from './containers/home'
import Login from './containers/login'
import Signup from './containers/signup'
import Page404 from './containers/page-404'

import reqLayout from './_common/hoc/layout'
import reqAuth from './_common/hoc/reqAuth'
import reqNoAuth from './_common/hoc/reqNoAuth'
import { useAppGlobalAction } from './_common/hooks/actions/appGlobalActionHook';

function App() {
  /**
   * const
   */
  const globalAction = useAppGlobalAction()
  /**
   * effetcs
   */
  useEffect(() => {
    window.addEventListener("resize", checkDeviceSize)
    checkDeviceSize()
    return () => {
      window.removeEventListener("resize", checkDeviceSize)
    }
  }, [])

  /**
   * functions
   */
  const checkDeviceSize = () => {
    // eslint-disable-next-line no-restricted-globals
    let width = (window.innerWidth > 0) ? window.innerWidth : (screen as any).width;
    if (width < 576) {
      globalAction.setDeviceMobile()
    } else if (width < 768) {
      globalAction.setDeviceTab()
    } else {
      globalAction.setDeviceDesktop()
    }
  }

  return (
    <Router>
      <Switch>
        <Route exact path={URLS.HOME} component={reqAuth(Home)} />
        <Route path={URLS.LOGIN} component={reqNoAuth(Login)} />
        <Route path={URLS.SIGNUP} component={reqNoAuth(Signup)} />
        <Route path="*" component={reqLayout(Page404)} />
      </Switch>
    </Router>
  );
}

export default App;

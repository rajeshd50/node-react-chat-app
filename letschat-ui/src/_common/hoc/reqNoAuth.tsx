import React, { useEffect } from 'react'
import { Redirect } from 'react-router'
import { URLS } from '../../config'
import Layout from '../../components/layout/layout'
import { useAuthStatus } from '../hooks/custom/useAuthStatus'

/**
 * check if auth is available, then redirect if necessary 
 * @param Component Component to render
 */
function requireNoAuth(Component: React.ComponentType) {
  function NoAuthHoc(props: any) {
    const isAuth = useAuthStatus()

    return (
      isAuth ? <Redirect to={URLS.HOME}/> : <Layout>
        <Component {...props} />
      </Layout>
    )
  }

  return NoAuthHoc
}
export default requireNoAuth

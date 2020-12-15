import React, { useEffect } from 'react'
import { Redirect } from 'react-router'
import { useHistory } from 'react-router-dom'
import { URLS } from '../../config'
import Layout from '../../components/layout/layout'
import { useAuthStatus } from '../hooks/custom/useAuthStatus'

/**
 * check if auth is available, then redirect if necessary 
 * @param Component Component to render
 */
function requireAuth(Component: React.ComponentType) {
  function AuthHoc(props: any) {
    const isAuth = useAuthStatus()

    return (
      isAuth ? <Layout>
        <Component {...props} />
      </Layout> : <Redirect to={URLS.LOGIN}/>
    )
  }

  return AuthHoc
}
export default requireAuth

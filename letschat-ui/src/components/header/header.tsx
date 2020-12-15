import React from 'react'

import {
  Navbar
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ACTIONS, URLS } from '../../config'
import { useAuthStatus } from '../../_common/hooks/custom/useAuthStatus'

import {
  AiOutlineLogout,
} from 'react-icons/ai'
import { useUserApi } from '../../_common/hooks/api/appUserApiHook'
import { useToaster } from '../../_common/hooks/custom/appToasterHook'
import { useAppUserDetailsSelector } from '../../_common/hooks/selectors/userSelectorHook'

function HeaderMenu() {

  const auth = useAuthStatus()
  const userApi = useUserApi()
  const toast  = useToaster()
  const user = useAppUserDetailsSelector()
  /**
   * functions
   */
  const onClickLogout = () => {
    userApi.callDoLogout(() => {}, (message: string) => {
      toast.error(message)
    })
  }

  if (!auth || !user) {
    return null
  }

  return (
    <div>
      <Navbar bg="dark">
        <Link to={URLS.HOME} className="navbar-brand text-light d-flex align-items-center">
          <img
            src="/images/icons/android-icon-144x144.png"
            className="d-inline-block align-top mr-1 header-image"
            alt="React Bootstrap logo"
          />
          <span className="header-text-logo">Lets Chat</span>
        </Link>
        <div className="d-flex justify-content-end flex-grow-1 align-items-center">
          <span className="text-light mr-2 font-weight-bold header-username">Hello {user.name}</span>
          <button onClick={onClickLogout} className="btn btn-dark btn-logout">Logout <AiOutlineLogout/></button>
        </div>
      </Navbar>
    </div>
  )
}

export default HeaderMenu

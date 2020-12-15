import { useSelector } from 'react-redux'
import { StateExtended } from '../../interfaces/StateExtended'


export function useAppUserDetailsSelector() {
  const user = useSelector((state: StateExtended) => state.user.user)

  return user
}

export function useAppUserTokenSelector() {
  const token = useSelector((state: StateExtended) => state.user.token)

  return token
}

export function useAppUserAuthSelector() {
  const isAuth = useSelector((state: StateExtended) => state.user.isAuthenticated)

  return isAuth
}

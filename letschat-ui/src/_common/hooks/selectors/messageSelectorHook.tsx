import { useSelector } from 'react-redux'
import { StateExtended } from '../../interfaces/StateExtended'


export function useAppMessageListSelector() {
  const list = useSelector((state: StateExtended) => state.message.list)

  return list
}

export function useAppMessageLimitSelector() {
  const limit = useSelector((state: StateExtended) => state.message.limit)

  return limit
}

export function useAppMessageTotalSelector() {
  const total = useSelector((state: StateExtended) => state.message.total)

  return total
}

export function useAppMessageOffsetSelector() {
  const offset = useSelector((state: StateExtended) => state.message.offset)

  return offset
}

export function useAppMessageSelectedUserSelector() {
  const user = useSelector((state: StateExtended) => state.message.selectedUser)

  return user
}

export function useAppUserFriendListSelector() {
  const friends = useSelector((state: StateExtended) => state.message.friends)

  return friends
}
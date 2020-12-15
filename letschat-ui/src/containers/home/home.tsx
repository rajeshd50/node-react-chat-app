import React, { useEffect } from 'react'
import ChatArea from '../../components/chat/chatarea/chatArea'
import FriendList from '../../components/chat/friendlist/friendList'
import { useAppGlobalIsDeviceMobileSelector } from '../../_common/hooks/selectors/globalSelectorHook'
import useSocket from 'use-socket.io-client';
import { SOCKET_BASE_URL, SOCKET_EVENTS } from '../../config';
import { useAppUserDetailsSelector } from '../../_common/hooks/selectors/userSelectorHook';
import { ChatMessage } from '../../_common/interfaces/models/chatMessage';
import { useAppMessageAction } from '../../_common/hooks/actions/appMessageActionHook';
import { Friends } from '../../_common/interfaces/models/firends';

function Home() {
  /**
   * const
   */
  const isMobile = useAppGlobalIsDeviceMobileSelector()
  const user = useAppUserDetailsSelector()
  const messageAction = useAppMessageAction()
  const [socket] = useSocket(SOCKET_BASE_URL, {
    autoConnect: true,
    query: {
      userId: user?.id
    }
  })
  /**
   * effects
   */
  useEffect(() => {
    if (user && user.id) {
      socket.connect()

      socket.on(SOCKET_EVENTS.MESSAGE, (data: ChatMessage) => {
        messageAction.appendNewMessage(data)
      })
      socket.on(SOCKET_EVENTS.FRIENDS, (data: Friends[]) => {
        messageAction.setUserFriendList(data)
      })
    }
  }, [user])
  /**
   * functions
   */
  const sendMessage = (text: string, toUser: number) => {
    let data = {
      text,
      senderId: user?.id,
      receiverId: toUser, 
    }
    socket.emit(SOCKET_EVENTS.MESSAGE, data)
    messageAction.appendNewMessage(data)
  }
  /**
   * render functions
   */
  return (
    <div className="chat-container">
      <div className="chat-desktop">
        <FriendList shouldHide={isMobile}/>
        <ChatArea sendMessage={sendMessage}/>
      </div>
    </div>
  )
}

export default Home

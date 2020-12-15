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
import { useAppMessageSelectedUserSelector } from '../../_common/hooks/selectors/messageSelectorHook';
import { useToaster } from '../../_common/hooks/custom/appToasterHook';

interface CustomToasterProps {
  message: ChatMessage;
  onClick: (data: ChatMessage) => void;
}

function CustomToaster({
  message,
  onClick,
}: CustomToasterProps) {
  if (!message) {
    return null
  }
  return (
    <div className="custom-toast-body" onClick={() => onClick(message)}>
      <span>Message from {message.sender_details?.name}</span>
      <span>{message.text}</span>
    </div>
  )
}


function Home() {
  /**
   * const
   */
  const isMobile = useAppGlobalIsDeviceMobileSelector()
  const user = useAppUserDetailsSelector()
  const currentChatUser = useAppMessageSelectedUserSelector()
  const messageAction = useAppMessageAction()
  const toast = useToaster();
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
        let uid = getCurrentChatUserId()
        if (uid && uid != data.senderId) {
          toast.showCustom(<CustomToaster onClick={onToasterClick} message={data} />)
        }
      })
      socket.on(SOCKET_EVENTS.FRIENDS, (data: Friends[]) => {
        messageAction.setUserFriendList(data)
      })
    }
  }, [user])
  /**
   * functions
   */
  const onToasterClick = (data: ChatMessage) => {
    if (data && data.sender_details && user) {
      messageAction.setSelectedUser({
        userId: user.id,
        friendId: data.senderId,
        last_message_time: data.createdAt,
        user_details: user,
        friend_details: data.sender_details,
      })
    }
  }
  const getCurrentChatUserId = () => {
    if (!currentChatUser) {
      return null
    }
    if ((currentChatUser as Friends).friendId) {
      return (currentChatUser as Friends).friendId
    } else {
      return currentChatUser.id
    }
  }
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

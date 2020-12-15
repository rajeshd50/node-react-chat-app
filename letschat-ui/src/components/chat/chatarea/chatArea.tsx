import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useAppMessageLimitSelector, useAppMessageListSelector, useAppMessageOffsetSelector, useAppMessageSelectedUserSelector, useAppUserFriendListSelector } from '../../../_common/hooks/selectors/messageSelectorHook'
import { useAppUserDetailsSelector } from '../../../_common/hooks/selectors/userSelectorHook'
import { Friends } from '../../../_common/interfaces/models/firends'
import { SearchUser } from '../../../_common/interfaces/models/searchUser'
import UserLogo from '../../userlogo/userLogo'
import PerfectScrollbar from 'react-perfect-scrollbar'
import moment from 'moment'
import {
  IoMdSend,
} from 'react-icons/io'
import { useAppGlobalIsDeviceMobileSelector } from '../../../_common/hooks/selectors/globalSelectorHook'
import { useMessageApi } from '../../../_common/hooks/api/appMessageApiHook'
import { useAppMessageAction } from '../../../_common/hooks/actions/appMessageActionHook'
import FriendsModal from '../friendsModal/friendsModal'

import classnames from 'classnames'

interface ChatAreaProps {
  sendMessage: (text: string, toUser: number) => void;
}

function ChatArea({
  sendMessage,
}: ChatAreaProps) {
  /**
   * const
   */
  const selectedUser = useAppMessageSelectedUserSelector()
  const user = useAppUserDetailsSelector()
  const [ messageText, setMessageText ] = useState('')
  const [ showListModal, setShowListModal ] = useState(false)
  const isMobile = useAppGlobalIsDeviceMobileSelector()
  const messageList = useAppMessageListSelector()
  const messageApi = useMessageApi()
  const limit = useAppMessageLimitSelector()
  const offset = useAppMessageOffsetSelector()
  const messageAction = useAppMessageAction()
  const friendList = useAppUserFriendListSelector()
  const [ chatUserId, setChatUserId ] = useState(0)
  /**
   * effects
   */
  /**
   * set limit and offset 
   */
  useEffect(() => {
    messageAction.setLimit(500)
    messageAction.setOffset(0)
  }, [])
  /**
   * fetch past message list for the selected user
   */
  useEffect(() => {
    if (selectedUser) {
      let chatId = (selectedUser as Friends).friendId ? (selectedUser as Friends).friendId : selectedUser.id
      messageApi.callGetList({
        user: chatId,
        limit: limit || 100,
        offset: offset || 0,
      }, () => {}, () => {})

      setChatUserId(chatId)
    }
  }, [selectedUser])
  /**
   * scroll down chat area, when new message arrives
   */
  useLayoutEffect(() => {
    let lastMessage = document.querySelector('.message-single:last-child')
    if (lastMessage) {
      lastMessage.scrollIntoView()
    }
  }, [messageList])
  /**
   * functions
   */
  /**
   * get user name to display on top section
   */
  const getUserName = () => {
    if (!selectedUser) {
      return ''
    }
    return (selectedUser as Friends).friend_details ? (selectedUser as Friends).friend_details?.name : (selectedUser as SearchUser).name ? (selectedUser as SearchUser).name : 'N/A'
  }
  /**
   * send message via socket (parent component actually sends the data)
   */
  const sendChatMessage = () => {
    if (messageText && selectedUser) {
      let toId = null
      if ((selectedUser as Friends).friendId) {
        toId = (selectedUser as Friends).friendId
      } else {
        toId = selectedUser.id
      }
      sendMessage(messageText, toId);
      setMessageText('')
    }
  }
  /**
   * check if enter is pressed, if yes then send message
   * @param evt event
   */
  const onKeyDownInput = (evt: React.KeyboardEvent) => {
    if (evt.key == "Enter") {
      if (messageText) {
        sendChatMessage()
      }
    }
  }
  /**
   * open friend list modal
   */
  const openListModal = () => {
    setShowListModal(true)
  }
  /**
   * close friend list modal
   */
  const closeListModal = () => {
    setShowListModal(false)
  }
  /**
   * get time string to display bellow chat messages
   * @param str string
   */
  const getTimeString = (str: string) => {
    let momentObj = moment(str)

    if (momentObj.format('YYYY-MM-DD') == moment().format('YYYY-MM-DD')) {
      // today
      return momentObj.format('hh:mm A');
    } else {
      return momentObj.format('D/M YY, hh:mm A')
    }
  }
  /**
   * render functions
   */
  return (
    <div className="chat-main-area">
      {
        selectedUser ? <>
          <div className="chat-main-header">
            <div className="chat-main-user-info">
              <UserLogo name={getUserName()} imageLink={(selectedUser as Friends).friend_details?.imageFullPath} />
              <div className="chat-main-user-name-wrapper">
                <span className="chat-main-user-name">{getUserName()}</span>
              </div>
            </div>
            <div className="chat-main-user-list-wrap">
              {
                isMobile ? <button onClick={openListModal} className="btn btn-dark">Friend List</button> : null
              }
            </div>
          </div>
          <div className="chat-main-display">
            <div className="chat-main-messages">
            <PerfectScrollbar options={{
              suppressScrollX: true,
            }}>
              <div className="chat-main-messages-list">
              {
                messageList.filter(x => (x.receiverId == chatUserId || x.senderId == chatUserId) && (x.senderId == user?.id || x.receiverId == user?.id)).map((message, index) => {
                  let chatClass = classnames({
                    'message-single': true,
                    'send': message.senderId == user?.id,
                    'received': message.receiverId == user?.id,
                  })
                  let chatInnerClass = classnames({
                    'message-inner-single': true,
                    'send': message.senderId == user?.id,
                    'received': message.receiverId == user?.id,
                  })
                  return <div key={index} className={chatClass} >
                    <div className={chatInnerClass}>
                      <p>{message?.text}</p>
                      <span>{getTimeString(message.createdAt)}</span>
                    </div>
                  </div>
                })
              }
              </div>
            </PerfectScrollbar>
            </div>
            <div className="chat-main-input-container">
              <div className="chat-main-input-container-inner">
                <input onKeyDown={onKeyDownInput} value={messageText} onChange={(evt) => setMessageText(evt.target.value)} placeholder="Type your message" className="form-control chat-main-input"/>
                <a href="#" onClick={(evt) => {
                  evt.preventDefault()
                  sendChatMessage();
                }} className={messageText ? 'chat-main-input-send' : 'chat-main-input-send disabled'}>
                <IoMdSend/>
                </a>
              </div>
            </div>
          </div>
        </> : <>
          <div className="chat-no-user">
            <p>{friendList && friendList.length ? 'Select user to chat with!' : 'Lets search some friends!'}</p>
            {
              isMobile ? <button onClick={openListModal} className="btn btn-dark">Search Friends</button> : null
            }
          </div>
        </>
      }
      {
        isMobile ? <FriendsModal onClose={closeListModal} shouldShow={showListModal} /> : null
      }
    </div>
  )
}

export default ChatArea

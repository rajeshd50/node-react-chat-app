import React, { useEffect, useState } from 'react'
import { useUserApi } from '../../../_common/hooks/api/appUserApiHook'
import { useToaster } from '../../../_common/hooks/custom/appToasterHook'
import { useAppUserFriendListSelector } from '../../../_common/hooks/selectors/messageSelectorHook'
import PerfectScrollbar from 'react-perfect-scrollbar'
import moment from 'moment'
import {
  AiOutlineClose,
} from 'react-icons/ai'
import { Friends } from '../../../_common/interfaces/models/firends'
import UserLogo from '../../userlogo/userLogo'
import useDebounce from '../../../_common/hooks/custom/appDebounce'
import { SearchUser } from '../../../_common/interfaces/models/searchUser'
import { useAppMessageSelectedUserSelector } from '../../../_common/hooks/selectors/messageSelectorHook'
import { useAppMessageAction } from '../../../_common/hooks/actions/appMessageActionHook'
import { useMessageApi } from '../../../_common/hooks/api/appMessageApiHook'

interface FriendListProps {
  shouldHide?: boolean;
  onSelectUser?: (data: any) => void;
}

function FriendList({
  shouldHide,
  onSelectUser,
}: FriendListProps) {
  /**
   * const
   */
  const userApi = useUserApi()
  const toast = useToaster()
  const friendList = useAppUserFriendListSelector()
  const [searchText, setSearchText] = useState('')
  const [filteredFriendList, setFilteredFriendList] = useState<Friends[]>([])
  const debouncedSearchText = useDebounce(searchText, 500)
  const [ searching, setSearching ] = useState(false)
  const [ searchResult, setSearchResult ] = useState<SearchUser[]>([])
  const selectedUser = useAppMessageSelectedUserSelector()
  const messageAction = useAppMessageAction()
  const messageApi = useMessageApi()
  /**
   * effects
   */
  /**
   * get friend list
   */
  useEffect(() => {
    messageApi.callGetFriendList(() => {}, (message: string) => {
      toast.error(message)
    })
  }, [])
  /**
   * filter friend list according to typed text
   */
  useEffect(() => {
    if (!searchText) {
      setFilteredFriendList(friendList)
    } else {
      let list = friendList.filter(f => f.friend_details?.name.toLowerCase().includes(searchText.toLowerCase()))
      setFilteredFriendList(list)
    }
  }, [searchText, friendList])
  /**
   * fetch remote list of user names uses debounce of 500ms
   */
  useEffect(() => {
    if (debouncedSearchText) {
      setSearching(true);
      userApi.callSearchUser({
        text: debouncedSearchText,
      }, (message: string, data: SearchUser[]) => {
        setSearching(false)
        setSearchResult(data)
      }, (message: string) => {
        toast.error(message);
      })
    } else {
      setSearchResult([])
    }
  }, [debouncedSearchText])
  /**
   * if no user is selected then select the first one
   * by default
   */
  useEffect(() => {
    if (friendList && friendList.length && (!selectedUser || !selectedUser.id)) {
      messageAction.setSelectedUser(friendList[0])
    }
  }, [friendList])
  /**
   * functions
   */
  /**
   * clear the search text input
   * @param evt event
   */
  const clearSearchText = (evt: React.MouseEvent) => {
    evt && evt.preventDefault()
    setSearchText('')
  }
  /**
   * on user select and user to chat with
   * @param data any
   */
  const onSelectUserClicked = (data: any) => {
    messageAction.setSelectedUser(data)
    onSelectUser && onSelectUser(data);
  }
  /**
   * render functions
   */
  /**
   * on mobile device hide from the main chat area
   */
  if (shouldHide) {
    return null
  }
  return (
    <div className="friend-list-container">
      <div className="friend-list-filter-input-container">
        <input placeholder="Find friends" className="form-control friend-list-filter-input" value={searchText} onChange={(evt) => setSearchText(evt.target.value)} />
        {
          searchText ? <a href="#" className="friend-list-filter-clear" onClick={clearSearchText}>
            <AiOutlineClose/>
          </a> : null
        }
      </div>
      <PerfectScrollbar options={{
        suppressScrollX: true,
      }}>
      <div className="friend-list-inner">
        {/* search list array - from remote */}
        {
          searchResult && searchResult.length ? <>
            <div className="search-result-list">
              <p>Search Result</p>
            {
              searchResult.slice(0, 10).map((sr, index) => {
                return <div key={index} className="search-result-single" onClick={() => onSelectUserClicked(sr)} >
                  <UserLogo name={sr.name} />
                  <span>{sr.name}</span>
                </div>
              })
            }
            </div>
          </> : null
        }
        {/* local friends array after filtered */}
        {
          friendList && friendList.length ? <>
          {
            filteredFriendList && filteredFriendList.length ? filteredFriendList.map((frnd, index) => {
              return <div key={index} className="single-friend-container" onClick={() => onSelectUserClicked(frnd)}>
                <UserLogo name={frnd.friend_details?.name} imageLink={frnd.friend_details?.imageFullPath} />
                <div className="friend-list-details">
                <span className="friend-list-name">{frnd.friend_details?.name}</span>
                <span className="friend-list-date">{frnd.last_message_time ? moment(frnd.last_message_time).format('ddd, D/M YY, h:m A') : 'N/A'}</span>
                </div>
              </div>
            }) : !searching && (!searchResult || !searchResult.length) ? <div className="friend-list-empty mt-3">
              <p>Try change search filter!</p>
            </div> : null
          }
          </> : <div className="friend-list-empty mt-3">
            <p>No friends yet!</p>
          </div>
        }
        
      </div>
      </PerfectScrollbar>
    </div>
  )
}

export default FriendList

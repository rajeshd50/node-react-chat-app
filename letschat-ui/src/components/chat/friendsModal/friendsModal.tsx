import React from 'react'
import { Modal } from 'react-bootstrap'

import { AiOutlineCloseCircle } from 'react-icons/ai'
import FriendList from '../friendlist/friendList'

interface FriendsModalProps {
  shouldShow: boolean;
  onClose: () => void;
}
/**
 * modal to show friend list when in mobile device
 */
function FriendsModal({
  shouldShow,
  onClose,
}: FriendsModalProps) {
  const onSelectUser = (data: any) => {
    onClose()
  }
  return (
    <React.Fragment>
      <Modal
        show={shouldShow}
        backdrop="static"
        keyboard={false}
        size="sm"
        className="friend-list-modal-wrapper"
      >
        <Modal.Body className="friend-list-modal-body" >
          <a href="#" onClick={(evt) => {
            evt.preventDefault()
            onClose()
          }}>
            <AiOutlineCloseCircle/>
          </a>
          <FriendList onSelectUser={onSelectUser}/>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}

export default FriendsModal

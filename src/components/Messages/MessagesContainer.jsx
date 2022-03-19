import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/messagesReducer';
import Messages from './Messages';

const MessagesContainer = (props) => {

  let state = props.store.getState().messagesPage

  let onSendMessageClick = () => {
    props.store.dispatch(addMessageActionCreator())
  }

  let onMessageChange = (body) => {
    props.store.dispatch(updateNewMessageTextActionCreator(body))
  }


  return (
    <Messages updateNewMessageText={onMessageChange}
              sendMessage={onSendMessageClick}
              messagesPage={state}/>
  )
}

export default MessagesContainer

import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/messagesReducer';
import Messages from './Messages';
import StoreContext from '../../storeContext';

const MessagesContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().messagesPage
          let onSendMessageClick = () => {
            store.dispatch(addMessageActionCreator())
          }
          let onMessageChange = (body) => {
            store.dispatch(updateNewMessageTextActionCreator(body))
          }

          return (
            <Messages updateNewMessageText={onMessageChange}
                      sendMessage={onSendMessageClick}
                      messagesPage={state}/>
          )
        }
      }
    </StoreContext.Consumer>

  )
}

export default MessagesContainer

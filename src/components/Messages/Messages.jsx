import React from 'react'
import s from './Messages.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/messagesReducer';

const Messages = (props) => {

  let state = props.messagesPage

  let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>
  ))

  let messagesElements = state.messagesData.map((m) => (
    <Message message={m.message}/>
  ))

  let onSendMessageClick = () => {
    props.sendMessage()
  }

  let onMessageChange = (event) => {
    let body = event.target.value
    props.updateNewMessageText(body)
  }


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div>
        <div className={s.messages}>{messagesElements}</div>
        <textarea placeholder='Enter your message'
                  onChange={onMessageChange}
                  value={state.newMessageText}/>
        <button onClick={onSendMessageClick}>Send</button>
      </div>
    </div>
  )
}

export default Messages

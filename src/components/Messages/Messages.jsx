import React from 'react'
import s from './Messages.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Messages = (props) => {
  let dialogsElements = props.state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ))

  let messagesElements = props.state.messagesData.map((m) => (
    <Message message={m.message} />
  ))

  let newMessageElement = React.createRef()

  let addMessage = () => {
    props.dispatch({type: 'ADD-MESSAGE'})
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value
    props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text})
  }


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div>
        <div className={s.messages}>{messagesElements}</div>
        <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText}/>
        <button onClick={addMessage}>Отправить</button>
      </div>
    </div>
  )
}

export default Messages

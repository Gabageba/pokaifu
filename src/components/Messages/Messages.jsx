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
  let newMessegeElement = React.createRef()
  let addMessage = () => {
    let text = newMessegeElement.current.value
    alert(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div>
        <div className={s.messages}>{messagesElements}</div>
        <textarea ref={newMessegeElement}/>
        <button onClick={addMessage}>Отправить</button>
      </div>
    </div>
  )
}

export default Messages

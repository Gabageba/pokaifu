import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './Redux/state'

export let rerenderEntireTree = (state) => {
  ReactDOM.render(<App state={state}
                       updateNewPostText={updateNewPostText}
                       updateNewMessageText={updateNewMessageText}
                       addMessage={addMessage}
                       addPost={addPost} />, document.getElementById('root'))
}
import reportWebVitals from './reportWebVitals'
import state, {subscribe} from './Redux/state';
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './Redux/state'

let rerenderEntireTree = (state) => {
  ReactDOM.render(<App state={state}
                       updateNewPostText={updateNewPostText}
                       updateNewMessageText={updateNewMessageText}
                       addMessage={addMessage}
                       addPost={addPost} />, document.getElementById('root'))
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

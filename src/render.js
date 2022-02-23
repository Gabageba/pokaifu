import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {addPost, updateNewPostText} from './Redux/state'

export let rerenderEntireTree = (state) => {
  ReactDOM.render(<App state={state}
                       updateNewPostText={updateNewPostText}
                       addPost={addPost}/>, document.getElementById('root'))
}
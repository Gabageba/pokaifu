import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

let postsData = [
  {id: 1, message: 'Hi how are you', likesCount: 3},
  {id: 2, message: 'It\'s my first post', likesCount: 56},
  {id: 1, message: 'Fuck you', likesCount: 100},
  {id: 1, message: 'Motherfucker', likesCount: 999}
]

let dialogsData = [
  {id: 1, name: 'Gabageba'},
  {id: 2, name: 'Alexandr'},
  {id: 3, name: 'Ekaterina'},
  {id: 4, name: 'Egor'},
  {id: 5, name: 'Vlad'},
  {id: 6, name: 'Nikita'}
]

let messagesData = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How your mom'},
  {id: 3, message: 'Fuck'},
  {id: 4, message: 'Fuck'},
  {id: 5, message: 'Fuck'}
]

ReactDOM.render(<App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

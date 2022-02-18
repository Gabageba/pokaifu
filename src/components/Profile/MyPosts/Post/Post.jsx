import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={props.avatar} alt='avatar'/>
      {props.message}
      <div className={s.likes}>
        <span >like</span>
        <span className={s.counter}>{props.likeCounter}</span>
      </div>
    </div>
  )
}

export default Post

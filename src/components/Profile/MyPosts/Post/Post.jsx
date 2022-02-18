import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg' alt='avatar'/>
      {props.message}
      <div className={s.likes}>
        <span >like</span>
        <span className={s.counter}>{props.likeCounter}</span>
      </div>
    </div>
  )
}

export default Post

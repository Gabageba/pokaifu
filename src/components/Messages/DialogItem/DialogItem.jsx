import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={s.chat}>
      <img className={s.avatar} src={props.avatar} alt="Avatar"/>
      <NavLink className={s.name} to={'/messages/' + props.id}>{props.name}</NavLink>
    </div>
  )
}


export default DialogItem
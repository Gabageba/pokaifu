import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

const SelectedLink = () => {
  return (
    select => select.isActive ? s.activeLink : s.item
  )
}

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/profile" className={SelectedLink()}>Profile</NavLink>
      </div>
      <div>
        <NavLink to="/messages/" className={SelectedLink()}>Messages</NavLink>
      </div>
      <div>
        <NavLink to="/news" className={SelectedLink()}>News</NavLink>
      </div>
      <div>
        <NavLink to="/users" className={SelectedLink()}>Users</NavLink>
      </div>
      <div>
        <NavLink to="/music" className={SelectedLink()}>Music</NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={SelectedLink()}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar

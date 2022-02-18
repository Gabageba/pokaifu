import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.header}>
        <img src="https://a-static.besthdwallpaper.com/videoigra-cyberpunk-2077-devushka-mototsiklist-oboi-3440x1440-63218_15.jpg" alt="Header"/>
      </div>
      <div className={s.descriptionBlock}>ava+description</div>
    </div>
  )
}

export default ProfileInfo

import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div className={s.header}>
        <img src="https://a-static.besthdwallpaper.com/videoigra-cyberpunk-2077-devushka-mototsiklist-oboi-3440x1440-63218_15.jpg" alt="Header"/>
      </div>
      <div className={s.descriptionBlock}>
        ava+description
        <img src={props.profile.photos.large} alt=""/>
      </div>
    </div>
  )
}

export default ProfileInfo

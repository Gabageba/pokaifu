import React from 'react';
import style from './Users.module.css'

const Users = (props) => {

  if (props.usersData.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        fullName: 'Alexandr',
        status: 'Motherfucker',
        location: {city: 'Novosibirsk', country: 'Russia'},
        photoUrl:
          'https://shapka-youtube.ru/wp-content/uploads/2020/12/ava-anime-1.jpg'
      },
      {
        id: 2,
        followed: false,
        fullName: 'Ekaterina',
        status: ':)',
        location: {city: 'Moscow', country: 'Russia'},
        photoUrl:
          'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkW6oS2kKn63RiJTxk6T6xGqaKTM5SRkZCeTgDn6uOyic&fn=sqr_288'
      },
      {
        id: 3,
        followed: true,
        fullName: 'Gabageba',
        status: 'Fuck you, ',
        location: {city: 'New-York', country: 'USA'},
        photoUrl:
          'https://i.pinimg.com/736x/03/ce/22/03ce22d9739999cb89556c77be4685ee.jpg'
      }
    ])
  }


  return (
    <div>
      {
        props.usersData.map(u =>
          <div key={u.id}>
            <span>
              <div>
                <img className={style.userPhoto} src={u.photoUrl} alt="Avatar"/>
              </div>
              <div>
                {u.followed
                  ? <button onClick={() => props.unfollow(u.id)}>unfollow</button>
                  : <button onClick={() => props.follow(u.id)}>follow</button>
                }

              </div>
            </span>
            <span>
              <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
              </span>
            </span>
          </div>)
      }
    </div>
  )
}

export default Users
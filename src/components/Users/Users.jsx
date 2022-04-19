import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/User.png';
import Spinner from '../Spinner/Spinner';

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 0; i <= 30; i++) {
    pages.push(i + 1)
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return (
            <span key={p}
                  className={props.currentPage === p && style.selectedPage}
                  onClick={() => {
                    props.onPageChange(p)
                  }}
            >{p}</span>
          )
        })
        }
      </div>
      {
        props.usersData.map(u =>
          <div key={u.id}>
            <Spinner/>
            <span>
              <div>
                <img className={style.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                     alt="Avatar"/>
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
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>'u.location.city'</div>
                <div>'u.location.country'</div>
              </span>
            </span>
          </div>)
      }
    </div>
  )
}

export default Users;
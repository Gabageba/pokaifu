import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/profileReducer';

const MyPosts = (props) => {

  let postsElements = props.profilePage.postsData.map(p => (
    <Post message={p.message} likeCounter={p.likesCount} avatar={p.avatar}/>
  ))


  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = (event) => {
    let text = event.target.value
    props.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange}
                    placeholder='Enter post text'
                    value={props.profilePage.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts

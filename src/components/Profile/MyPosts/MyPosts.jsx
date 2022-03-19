import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElements = props.postsData.map(p => (
    <Post message={p.message} likeCounter={p.likesCount} avatar={p.avatar}/>
  ))


  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = (event) => {
    let text = event.target.value
    props.updateNewPostText(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange}
                    placeholder='Enter post text'
                    value={props.newPostText}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts

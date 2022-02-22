import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElements = props.postsData.map(p => <Post message={p.message} likeCounter={p.likesCount} avatar={p.avatar}/>)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value
    alert(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}/>
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

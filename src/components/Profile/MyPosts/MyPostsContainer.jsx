import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../storeContext';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState()
          let addPost = () => {
            store.dispatch(addPostActionCreator())
          }
          let onPostChange = (text) => {
            store.dispatch(updateNewPostTextActionCreator(text))
          }

          return (
            <MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     newPostText={state.profilePage.newPostText}
                     postsData={state.profilePage.postsData}/>
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer

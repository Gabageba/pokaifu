const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  postsData: [
    {
      id: 1,
      message: 'Hi how are you',
      likesCount: 3,
      avatar:
        'https://shapka-youtube.ru/wp-content/uploads/2020/12/ava-anime-1.jpg'
    },
    {
      id: 2,
      message: "It's my first post",
      likesCount: 56,
      avatar:
        'https://avatars.mds.yandex.net/i?id=a3863d37caad9303f87326aaac594681-5874987-images-thumbs&n=13&exp=1'
    },
    {
      id: 3,
      message: 'Fuck you',
      likesCount: 100,
      avatar:
        'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkW6oS2kKn63RiJTxk6T6xGqaKTM5SRkZCeTgDn6uOyic&fn=sqr_288'
    },
    {
      id: 4,
      message: 'Motherfucker',
      likesCount: 999,
      avatar:
        'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkW6oS2kKn63RiJTxk6T6xGqaKTM5SRkZCeTgDn6uOyic&fn=sqr_288'
    }
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
        avatar:
          'https://i.pinimg.com/originals/b8/be/c7/b8bec7a821b32544097807f259a6057d.jpg'
      }
     return {
        ...state,
       newPostText: '',
       postsData: [...state.postsData, newPost]
     }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export default profileReducer

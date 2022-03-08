const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


let store = {
  _state: {
    profilePage: {
      postsData: [
        {
          id: 1,
          message: 'Hi how are you',
          likesCount: 3,
          avatar: 'https://shapka-youtube.ru/wp-content/uploads/2020/12/ava-anime-1.jpg'
        },
        {
          id: 2,
          message: 'It\'s my first post',
          likesCount: 56,
          avatar: 'https://avatars.mds.yandex.net/i?id=a3863d37caad9303f87326aaac594681-5874987-images-thumbs&n=13&exp=1'
        },
        {
          id: 3,
          message: 'Fuck you',
          likesCount: 100,
          avatar: 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkW6oS2kKn63RiJTxk6T6xGqaKTM5SRkZCeTgDn6uOyic&fn=sqr_288'
        },
        {
          id: 4,
          message: 'Motherfucker',
          likesCount: 999,
          avatar: 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkW6oS2kKn63RiJTxk6T6xGqaKTM5SRkZCeTgDn6uOyic&fn=sqr_288'
        }
      ],
      newPostText: 'huina'
    },
    messagesPage: {
      messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How your mom'},
        {id: 3, message: 'Fuck'},
        {id: 4, message: 'Fuck?'},
        {id: 5, message: 'Fuck'}
      ],
      newMessageText: 'hi',
      dialogsData: [
        {
          id: 1,
          name: 'Gabageba',
          avatar: 'https://i.pinimg.com/originals/b8/be/c7/b8bec7a821b32544097807f259a6057d.jpg'
        },
        {id: 2, name: 'Alexandr', avatar: 'https://www.meme-arsenal.com/memes/24ea176ff61da30ee142f0dbca6dcc90.jpg'},
        {
          id: 3,
          name: 'Ekaterina',
          avatar: 'https://avatars.mds.yandex.net/get-zen_doc/96506/pub_5c3d153511006c00aae0e2b8_5c3d161ee9811200ae0c0fb2/scale_1200'
        },
        {id: 4, name: 'Egor', avatar: 'https://i.pinimg.com/736x/66/47/e9/6647e94ebc652c4505b493cd6c27f791.jpg'},
        {
          id: 5,
          name: 'Vlad',
          avatar: 'https://otvet.imgsmail.ru/download/201890154_cc41733ab1966f78f7c3923f8988db3e_800.jpg'
        },
        {
          id: 6,
          name: 'Nikita',
          avatar: 'https://memepedia.ru/wp-content/uploads/2021/10/liza-oblozhka-alboma-hate-love.jpg'
        }
      ]
    }
  },
  _callSubscriber() {
    console.log('state was changed')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      debugger
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
        avatar: 'https://i.pinimg.com/originals/b8/be/c7/b8bec7a821b32544097807f259a6057d.jpg'
      }
      this._state.profilePage.postsData.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 6,
        message: this._state.messagesPage.newMessageText
      }
      this._state.messagesPage.messagesData.push(newMessage)
      this._state.messagesPage.newMessageText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.messagesPage.newMessageText = action.newText
      this._callSubscriber(this._state)
    }
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
  }
}

export default store
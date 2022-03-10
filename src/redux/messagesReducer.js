const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
  messagesData: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How your mom'},
    {id: 3, message: 'Fuck'},
    {id: 4, message: 'Fuck?'},
    {id: 5, message: 'Fuck'}
  ],
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
  ],
  newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = state.newMessageText
      state.messagesData.push({id: 6, message: newMessage})
      state.newMessageText = ''
      return state
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText
      return state
    default:
      return state
  }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) =>
  ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default messagesReducer
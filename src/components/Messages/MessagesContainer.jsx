import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/messagesReducer';
import Messages from './Messages';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: body => dispatch(updateNewMessageTextActionCreator(body)),
    sendMessage: () => dispatch(addMessageActionCreator()),
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer

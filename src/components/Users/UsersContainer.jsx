import {followAC, setUsersAC, unfollowAC} from '../../redux/usersReducer';
import {connect} from 'react-redux';
import Users from './Users';

let mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (usersData) => {
      dispatch(setUsersAC(usersData))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
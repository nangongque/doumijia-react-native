import { combineReducers } from 'redux'
import { USER } from '@util/action_types'

const defaultUserInfo = {
  id: '',
}

function userInfo(state = defaultUserInfo, action) {
  switch (action.type) {
    case USER.SET_USER_INFO:
      return action.data
    case USER.UPDATE_USER_INFO:
      return Object({}, state, action.data)
    case USER.CLEAR_USER_INFO:
      return { ...defaultUserInfo }
    default:
      return state
  }
}

const UserReducer = combineReducers({
  userInfo,
})

export default UserReducer

import { USER } from '@util/action_types'

export const setUserInfo = (data) => ({
  type: USER.SET_USER_INFO,
  data,
})

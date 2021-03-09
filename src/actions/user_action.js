import { sendSms } from '@service/apis'
import { USER } from '@util/action_types'

export const setUserInfo = (data) => ({
  type: USER.SET_USER_INFO,
  data,
})

export const fetchToken = (params, cb) => (dispatch) => {
  const phone = params.phone
  sendSms(phone).then((res) => {
    console.log(res)
  })
}

import { postSignInWithSms, queryUserById, sendSms } from '@service/apis'
import { deviceStorage, toastShort } from '@util'
import { USER } from '@util/action_types'
import store from '../store'

export const setUserInfo = (data) => ({
  type: USER.SET_USER_INFO,
  data,
})

export const updateUserInfo = (data) => ({
  type: USER.UPDATE_USER_INFO,
  data,
})

const clearUserInfo = () => ({
  type: USER.CLEAR_USER_INFO,
})

const afterLogin = async (id, cd) => {
  const res = await queryUserById(id)
  if ('status' in res) {
    const errorData = res.data
    if (errorData) {
      toastShort(errorData)
    }
  } else {
    // NativeModules.CookieManager.clearAll()
    deviceStorage.save('userInfo', res)
    store.dispatch(updateUserInfo(res))
    cd && cd()
  }
}

export const afterLogout = () => {
  store.dispatch(clearUserInfo())
}
export const fetchToken = (params, cb) => {
  const phone = params.phone
  sendSms(phone).then((res) => {
    if (res === '') {
      toastShort('发送成功')
      cb && cb()
    }
  })
}

export const signInWithSms = async (params, cd) => {
  const res = await postSignInWithSms(params)
  if ('status' in res) {
    const errorData = res.data
    if (errorData) {
      toastShort(errorData)
    }
  } else {
    afterLogin(res.id, cd)
  }
}

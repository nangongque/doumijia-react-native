import { postSignInWithSms, queryUserById, sendSms } from '@service/apis'
import { postChangeUserInfo, postReplaceAvatar } from '@service/apis/user'
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

export const signInWithSms = async (params, cb) => {
  const res = await postSignInWithSms(params)
  if ('status' in res) {
    const errorData = res.data
    if (errorData) {
      toastShort(errorData)
    }
  } else {
    afterLogin(res.id, cb)
  }
}

export const changeUserInfo = async (params, cd) => {
  const res = await postChangeUserInfo(params)
  console.log({ res })
  if (
    Object.prototype.toString.call(res) === '[object Object]' &&
    'status' in res
  ) {
    const errorData = res.data
    if (errorData) {
      toastShort(errorData)
    }
  } else {
    deviceStorage.update('userInfo', params)
    store.dispatch(updateUserInfo(params))
    toastShort('修改成功')
  }
}

export const replaceAvatar = async (params, cb) => {
  const { userInfo } = params
  const res = await postReplaceAvatar(params)
  if (
    Object.prototype.toString.call(res) === '[object Object]' &&
    'status' in res
  ) {
    const errorData = res.data
    if (errorData) {
      toastShort(errorData)
    }
  } else {
    Object.assign(userInfo, { headImg: res })
    deviceStorage.update('userInfo', userInfo)
    store.dispatch(updateUserInfo(userInfo))
    cb && cb()
    toastShort('更换成功')
  }
}

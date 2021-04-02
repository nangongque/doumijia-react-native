/**
 *
 */
import * as RU from '@util/ramdaUtil'
import { ResponseError } from 'umi-request'
import { authRequest, baseRequest } from '@service/clients'

/**
 * 更新用户资料
 */
const postChangeUserInfo = async (params) => {
  const res = await baseRequest.post('/user/update', {
    data: params,
    errorHandler: (e) => ({
      data: RU.camelizeKeys(e.data),
      status: e.response.status,
    }),
  })
  return res as '' | ResponseError
}

/**
 * 更换头像
 */

const postReplaceAvatar = async (params) => {
  const { id, file } = params
  const res = await authRequest.post('/user/uploadImage', {
    headers: { 'Content-Type': 'multipart/form-data' },
    data: {
      id,
      file,
    },
    errorHandler: (e) => {
      console.log(e)
    },
  })
  console.log({ res })
}

export { postChangeUserInfo, postReplaceAvatar }

/**
 *
 */
import * as RU from '@util/ramdaUtil'
import { ResponseError } from 'umi-request'
import { uploadImage, baseRequest } from '@service/clients'
import request, { extend } from 'umi-request'
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
  // const res = await request('http://120.27.235.186:8888/user/uploadImage', {
  //   method: 'post',
  //   headers: {},
  //   body: file,
  //   requestType: 'form',
  //   params: { id },
  // })

  const res = await uploadImage.post('/user/uploadImage', {
    body: file,
    params: { id },
    errorHandler: (e) => ({
      data: RU.camelizeKeys(e.data),
      status: e.response.status,
    }),
  })

  return res as string | ResponseError
}

export { postChangeUserInfo, postReplaceAvatar }

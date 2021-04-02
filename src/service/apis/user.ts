/**
 *
 */
import * as RU from '@util/ramdaUtil'
import { ResponseError } from 'umi-request'
import { baseRequest } from '@service/clients'
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

export { postChangeUserInfo }

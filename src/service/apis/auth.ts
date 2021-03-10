import { baseRequest } from '@service/clients'
import * as RU from '@util/ramdaUtil'
import { ResponseError } from 'umi-request'
/**
 * 发送短信验证码
 */
const sendSms = async (phone: string) => {
  return await baseRequest.post('/user/code', {
    data: {
      phone,
    },
    errorHandler: (e) => e,
  })
}

/**
 *
 */
const postSignInWithSms = async ({ phone, token }: SignInSmsParam) => {
  const res = await baseRequest.post(`/login/${phone}`, {
    data: {
      code: token,
    },
    errorHandler: (e) => ({
      data: RU.camelizeKeys(e.data),
      status: e.response.status,
    }),
  })
  return res as AuthUser | ResponseError
}

/**
 *
 */
const queryUserById = async (id: Id) => {
  const res = await baseRequest.post('/user/queryUserById', {
    data: {
      id,
    },
    errorHandler: (e) => ({
      data: RU.camelizeKeys(e.data),
      status: e.response.status,
    }),
  })
  return res as AuthUser | ResponseError
}

export { sendSms, postSignInWithSms, queryUserById }

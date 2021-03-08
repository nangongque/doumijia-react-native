import { baseRequest } from '@service/clients'

/**
 *
 */
const sendSms = async (phone) => {
  const res = await baseRequest.post('/user/code', {
    data: {
      phone,
    },
    errorHandler: (e) => console.log({ e }),
  })
  // console.log({ res })
  return
}

export { sendSms }

import request, { extend } from 'umi-request'
import config from '@util/check_config'

export const authRequest = extend({
  prefix: config.baseUrl,
  requestType: 'form',
})

export const baseRequest = extend({
  prefix: config.baseUrl,
})

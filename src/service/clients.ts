import request, { extend } from 'umi-request'
import config from '@util/check_config'

export const baseRequest = extend({
  prefix: config.baseUrl,
  requestType: 'form',
})

/**
 * 组件样式集
 * create by lijianpo on 2021/03/30
 */

import { StyleSheet } from '@ui'
import { adaptiveWidth, adaptiveHeight } from '@util'

const componentsStyles = StyleSheet.create({
  submitLoading: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: adaptiveHeight(240),
    backgroundColor: '#00000080',
    borderRadius: adaptiveWidth(20),
    paddingHorizontal: adaptiveWidth(30),
  },
})

export { componentsStyles }

/**
 * 我的页面样式
 * created by lijian on 2021/02/27
 */
import { StyleSheet } from '@ui'
import { deviceWidth } from '@util'

const mineStyles = StyleSheet.create({
  surfaceGradient: {
    width: deviceWidth,
    height: (deviceWidth * 480) / 750,
  },
})

export { mineStyles }

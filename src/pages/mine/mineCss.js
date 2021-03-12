/**
 * 我的页面样式
 * created by lijian on 2021/02/27
 */
import { StyleSheet } from '@ui'
import { deviceWidth, px2Dp } from '@util'

const mineStyles = StyleSheet.create({
  surfaceGradient: {
    width: deviceWidth,
    height: (deviceWidth * 420) / 750,
    paddingVertical: 30,
    justifyContent: 'space-between',
  },
  wordArt: {
    position: 'absolute',
    top: px2Dp(40),
    left: px2Dp(360),
  },
  lineOneGradient: {
    width: px2Dp(45),
    height: px2Dp(180),
    margin: px2Dp(30),
    transform: [{ rotate: '-15deg' }],
  },
  lineTwoGradient: {
    position: 'absolute',
    width: px2Dp(45),
    height: px2Dp(170),
    transform: [{ rotate: '-70deg' }],
    left: px2Dp(95),
    top: -px2Dp(5),
  },
  lineThreeGradient: {
    position: 'absolute',
    width: px2Dp(45),
    height: px2Dp(190),
    transform: [{ rotate: '30deg' }],
    left: px2Dp(190),
    top: -px2Dp(60),
  },
  lineFourGradient: {
    position: 'absolute',
    width: px2Dp(45),
    height: px2Dp(150),
    transform: [{ rotate: '-36deg' }],
    left: px2Dp(280),
    top: -px2Dp(72),
  },
})

export { mineStyles }

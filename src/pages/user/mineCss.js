/**
 * 我的页面样式
 * created by lijian on 2021/02/27
 */
import { StyleSheet } from '@ui'
import { deviceWidth, adaptiveWidth } from '@util'

const mineStyles = StyleSheet.create({
  surfaceGradient: {
    width: deviceWidth,
    height: (deviceWidth * 420) / 750,
    paddingVertical: 30,
    justifyContent: 'space-between',
  },
  wordArt: {
    position: 'absolute',
    top: adaptiveWidth(40),
    left: adaptiveWidth(360),
  },
  lineOneGradient: {
    width: adaptiveWidth(45),
    height: adaptiveWidth(180),
    margin: adaptiveWidth(30),
    transform: [{ rotate: '-15deg' }],
  },
  lineTwoGradient: {
    position: 'absolute',
    width: adaptiveWidth(45),
    height: adaptiveWidth(170),
    transform: [{ rotate: '-70deg' }],
    left: adaptiveWidth(95),
    top: -adaptiveWidth(5),
  },
  lineThreeGradient: {
    position: 'absolute',
    width: adaptiveWidth(45),
    height: adaptiveWidth(190),
    transform: [{ rotate: '30deg' }],
    left: adaptiveWidth(190),
    top: -adaptiveWidth(60),
  },
  lineFourGradient: {
    position: 'absolute',
    width: adaptiveWidth(45),
    height: adaptiveWidth(150),
    transform: [{ rotate: '-36deg' }],
    left: adaptiveWidth(280),
    top: -adaptiveWidth(72),
  },
})

export { mineStyles }

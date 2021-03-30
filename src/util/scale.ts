import { Dimensions, PixelRatio } from '@ui'
import ExtraDimensions from 'react-native-extra-dimensions-android'
import { isiOS } from './fullscreen'

const { width: deviceWidth, height: deviceHeight } = isiOS()
  ? Dimensions.get('window')
  : {
      width: ExtraDimensions.get('REAL_WINDOW_WIDTH'),
      height: ExtraDimensions.get('REAL_WINDOW_HEIGHT'),
    }
// 设计图的宽高
const UI_WIDTH = 750
const UI_HEIGHT = 1334

// 获取字体大小缩放比例
const fontScale = PixelRatio.getFontScale()
// 获取设备的像素密度
const pixelRatio = PixelRatio.get()

// 将一个布局尺寸(dp)转换为像素尺寸(px)
const screenWidthPx = PixelRatio.getPixelSizeForLayoutSize(deviceWidth)
const screenHeightPx = PixelRatio.getPixelSizeForLayoutSize(deviceHeight)

// 设置宽度
function adaptiveWidth(size: number) {
  const scaleWidth = (size * screenWidthPx) / UI_WIDTH
  const resSize = Math.round(scaleWidth / pixelRatio)
  return resSize
}

// 设置高度
function adaptiveHeight(size: number) {
  const scaleHeight = (size * screenHeightPx) / UI_HEIGHT
  const resSize = Math.round(scaleHeight / pixelRatio)
  return resSize
}

// 设置字体
function adaptiveFont(size: number) {
  const scaleWidth = deviceWidth / UI_WIDTH
  const scaleHeight = deviceHeight / UI_HEIGHT
  const scale = Math.min(scaleWidth, scaleHeight)
  const resSize = Math.round((size * scale) / fontScale)
  console.log({ size, resSize })
  return resSize
}
// // iphone6 像素
// const basePx = Platform.OS === 'ios' ? 750 : 720

// function adaptiveWidth(px: number) {
//   const layoutSize = (px / basePx) * deviceWidth
//   return PixelRatio.roundToNearestPixel(layoutSize)
// }

// function getFontSize(size: number) {
//   // iphone 5s and older Androids
//   if (deviceWidth < 360) {
//     return size - 1
//   }
//   // iphone 5
//   else if (deviceHeight < 667) {
//     return size
//   }
//   // iphone 6-6s
//   else if (deviceHeight >= 667 && deviceHeight <= 735) {
//     return size + 1
//   } else if (deviceHeight >= 735) {
//     return size + 2
//   }
//   return size
// }

// export { deviceWidth, deviceHeight, adaptiveWidth, getFontSize }
export {
  deviceWidth,
  deviceHeight,
  adaptiveFont,
  adaptiveWidth,
  adaptiveHeight,
}

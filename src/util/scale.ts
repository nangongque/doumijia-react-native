import { Dimensions, Platform, PixelRatio } from '@ui'
const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

// iphone6 像素
const basePx = Platform.OS === 'ios' ? 750 : 720

function px2Dp(px: number) {
  const layoutSize = (px / basePx) * deviceWidth
  return PixelRatio.roundToNearestPixel(layoutSize)
}

function getFontSize(size: number) {
  // iphone 5s and older Androids
  if (deviceWidth < 360) {
    return size - 1
  }
  // iphone 5
  else if (deviceHeight < 667) {
    return size
  }
  // iphone 6-6s
  else if (deviceHeight >= 667 && deviceHeight <= 735) {
    return size + 1
  } else if (deviceHeight >= 735) {
    return size + 2
  }
  return size
}

export { deviceWidth, deviceHeight, px2Dp, getFontSize }

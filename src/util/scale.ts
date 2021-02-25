import { Dimensions, Platform, PixelRatio } from '@ui'
const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

// iphone6 像素
const basePx = Platform.OS === 'ios' ? 750 : 720

function px2Dp(px: number) {
  const layoutSize = (px / basePx) * deviceWidth
  return PixelRatio.roundToNearestPixel(layoutSize)
}

export { deviceWidth, deviceHeight, px2Dp }

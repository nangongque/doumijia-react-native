import { StatusBar } from '@ui'
import { useFocusEffect } from '@react-navigation/native'
import { isiOS } from '@util'

/**
 * 设置状态栏样式
 * @param translucent 指定状态栏是否透明。设置为 true 时，应用会延伸到状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
 * @param barStyle 设置状态栏文本的颜色
 * @param backgroundColor 状态栏的背景色
 */
function SetStatusBar(barProps: BarProps) {
  const {
    translucent = true,
    barStyle = 'dark-content',
    backgroundColor = '#ffffff00',
  } = barProps

  useFocusEffect(() => {
    StatusBar.setBarStyle(barStyle, true)
    if (!isiOS()) {
      StatusBar.setTranslucent(translucent)
      StatusBar.setBackgroundColor(backgroundColor)
    }
  })
}

export { SetStatusBar }

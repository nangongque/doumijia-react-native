import { StatusBar } from '@ui'
import { useFocusEffect } from '@react-navigation/native'

/**
 * 设置状态栏样式
 * @param translucent 指定状态栏是否透明。设置为 true 时，应用会延伸到状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
 * @param barStyle 设置状态栏文本的颜色
 * @param backgroundColor 状态栏的背景色
 */
function setStatusBar(
  barStyle: string,
  translucent = true,
  backgroundColor = '#ffffff00',
) {
  useFocusEffect(() => {
    StatusBar.setTranslucent(translucent)
    StatusBar.setBarStyle(barStyle)
    StatusBar.setBackgroundColor(backgroundColor)
  })
}

export { setStatusBar }

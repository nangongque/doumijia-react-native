import React, { useCallback } from 'react'
import { View, StatusBar, Platform } from '@ui'
import { useFocusEffect } from '@react-navigation/native'
import { statusBarHeight } from '@util'

interface StatusBarProps {
  isDarkStyle: boolean
  statusBarBgColor?: string
}

const MyStatusBar: React.FC<StatusBarProps> = (props) => {
  const { isDarkStyle = true, statusBarBgColor = 'transparent' } = props

  const barStyle = isDarkStyle ? 'dark-content' : 'light-content'

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(barStyle, true)
      if (Platform.OS === 'android') {
        StatusBar.setTranslucent(true)
        StatusBar.setBackgroundColor(statusBarBgColor)
      }
    }, [barStyle, statusBarBgColor]),
  )

  return (
    // <View
    //   style={{
    //     height: statusBarHeight,
    //     backgroundColor: statusBarBgColor,
    //   }}
    // >
    <StatusBar
      translucent={true}
      backgroundColor="transparent"
      barStyle={barStyle}
    />
    // </View>
  )
}

export default MyStatusBar

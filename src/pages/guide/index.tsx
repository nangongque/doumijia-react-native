import React, { useRef, useState, useEffect } from 'react'
import { Animated, Easing } from 'react-native'
import { deviceHeight, deviceWidth, SetStatusBar } from '@util'
import { Column } from '@ui'
import { GuideOptions } from './components'

const barProps: BarProps = {
  translucent: true,
  barStyle: 'dark-content',
}

// 引导页
const Guide = ({ navigation }) => {
  SetStatusBar(barProps)
  const [animStop, setAnimStop] = useState(false)
  const scrollY = useRef(new Animated.Value(0)).current
  const scrollY2 = useRef(new Animated.Value(0)).current
  const startTranslateAnim = () => {
    Animated.parallel([
      Animated.timing(scrollY, {
        toValue: 1,
        duration: 40000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(scrollY2, {
        toValue: 1,
        duration: 40000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ]).start(() => {
      scrollY.setValue(0)
      scrollY2.setValue(0)
      if (!animStop) startTranslateAnim()
    })
  }
  const stopTranslateAnim = () => {
    setAnimStop(true)
    Animated.timing(scrollY).stop()
    Animated.timing(scrollY2).stop()
  }
  useEffect(() => {
    return startTranslateAnim()
  }, [])
  useEffect(() => {
    return stopTranslateAnim()
  }, [])
  return (
    <Column style={{ flex: 1 }}>
      <Animated.Image
        source={require('@source/images/bbg.png')}
        style={{
          width: deviceWidth,
          height: deviceHeight,
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -deviceHeight],
              }),
            },
          ],
        }}
      />
      <Animated.Image
        source={require('@source/images/bbg.png')}
        style={{
          width: deviceWidth,
          height: deviceHeight,
          transform: [
            {
              translateY: scrollY2.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -deviceHeight],
              }),
            },
          ],
        }}
      />
      <GuideOptions />
    </Column>
  )
}

export { Guide }

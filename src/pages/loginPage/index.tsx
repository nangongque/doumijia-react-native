import React, { useRef, useState, useEffect } from 'react'
import { View, Text, Button, Animated, Easing } from 'react-native'
import { deviceHeight, deviceWidth, setStatusBar } from '@util'
import { GHOpacity } from '@ui'
// 详情页
const LoginPage = ({ navigation }) => {
  // setStatusBar(false, 'dark-content', 'green')
  const [animStop, setAnimStop] = useState(false)
  const scrollY = useRef(new Animated.Value(0)).current
  const scrollY2 = useRef(new Animated.Value(0)).current
  const startTranslateAnim = () => {
    Animated.parallel([
      Animated.timing(scrollY, {
        toValue: 1,
        duration: 50000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(scrollY2, {
        toValue: 1,
        duration: 50000,
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
    <View style={{ flex: 1 }}>
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
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          width: 100,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
          left: 200,
          top: 200,
        }}
      >
        <Text onPress={() => navigation.navigate('TabNav')}>登录</Text>
      </View>
    </View>
  )
}

LoginPage.navigationOptions = {
  headerShown: false,
}
export { LoginPage }

/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>DetailScreen</Text>
<Button
  title="Go to Detail Again"
  // onPress={() => navigation.navigate('Detail')}
  onPress={() => navigation.push('Detail')}
/>
<Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
<Button title="Go back" onPress={() => navigation.goBack()} />
<Button
  title="Go back to first screen in stack"
  onPress={() => navigation.popToTop()}
/>
</View> */

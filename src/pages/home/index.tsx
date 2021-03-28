import React, { useState, useEffect } from 'react'
import { View, Text, Button, Loading, StatusBar } from '@ui'
import { deviceWidth, SetStatusBar, statusBarHeight } from '@util'
import { afterLogout } from '@actions/user_action'

const barProps: BarProps = {
  translucent: true,
  barStyle: 'dark-content',
}
// 首页
const Home = ({ navigation }) => {
  // SetStatusBar(barProps)
  // const [styleStatusBar, setStyleStatusBar] = useState('dark-content')
  const [barStyle, setBarStyle] = useState('dark-content')
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('home')
      // setBarStyle('dark-content')
      StatusBar.setBarStyle('dark-content', true)
    })

    return unsubscribe
  }, [navigation])

  return (
    <View style={{ paddingTop: statusBarHeight }}>
      <StatusBar
        // StatusBarAnimation="fade"
        translucent
        // backgroundColor="#ce3d3a"
        // barStyle="dark-content"
      />
      <Text>HomeScreen</Text>
      <Loading
        style={{
          width: deviceWidth,
          height: 200,
          alignItem: 'center',
          justifyContent: 'center',
        }}
      />
      <Button
        title="Go to Details"
        // onPress={() => navigation.navigate('TabNav')}
        onPress={() => afterLogout()}
      />
    </View>
  )
}

export { Home }

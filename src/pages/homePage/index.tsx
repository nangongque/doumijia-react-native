import React from 'react'
import { View, Text, Button, Loading } from '@ui'
import { deviceWidth, SetStatusBar, statusBarHeight } from '@util'
import { afterLogout } from '@actions/user_action'

const barProps: BarProps = {
  translucent: true,
  barStyle: 'dark-content',
}
// 首页
const HomeScreen = ({ navigation }) => {
  SetStatusBar(barProps)
  return (
    <View style={{ paddingTop: statusBarHeight }}>
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

export { HomeScreen }

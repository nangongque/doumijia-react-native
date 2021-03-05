import React from 'react'
import { View, Text, Button } from '@ui'
import { SetStatusBar, statusBarHeight } from '@util'

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
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('TabNav')}
      />
    </View>
  )
}

export { HomeScreen }

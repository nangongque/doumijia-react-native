import React from 'react'
import { useDimensions } from '@hooks'
import { statusBarHeight } from '@util'
import { afterLogout } from '@actions/user_action'
import { View, Text, Button, Loading, MyStatusBar } from '@ui'

// 首页
const Home = ({ navigation }) => {
  const { width } = useDimensions()
  return (
    <View style={{ paddingTop: statusBarHeight }}>
      <MyStatusBar isDarkStyle={true} />
      <Text>HomeScreen</Text>
      <Loading
        style={{
          width,
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

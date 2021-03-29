import React from 'react'
import { View, Text, Button, Loading, MyStatusBar } from '@ui'
import { deviceWidth, statusBarHeight } from '@util'
import { afterLogout } from '@actions/user_action'

// 首页
const Home = ({ navigation }) => {
  return (
    <View style={{ paddingTop: statusBarHeight }}>
      <MyStatusBar isDarkStyle={true} />
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

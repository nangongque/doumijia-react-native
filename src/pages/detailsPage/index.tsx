import React from 'react'
import { View, Text, Button } from 'react-native'
import { setStatusBar } from '@util'
// 详情页
const DetailScreen = ({ navigation }) => {
  // setStatusBar(false, 'dark-content', 'green')
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
    </View>
  )
}

DetailScreen.navigationOptions = {
  title: 'sad',
}
export { DetailScreen }

import React, { useState, useEffect } from 'react'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated'
import { Column, HeadTabView, MyText, Row, StatusBar } from '@ui'
import { MineHeader, Favorite, Liked } from './components'
import { useSafeArea } from '@hooks'
import { deviceWidth } from '@util'
import { useFocusEffect } from '@react-navigation/native'

const barProps: BarProps = {
  translucent: true,
  barStyle: 'light-content',
}

const UserHome = ({ navigation }) => {
  const [styleStatusBar, setStyleStatusBar] = useState('light-content')
  const { top } = useSafeArea()
  const frozeTop = top + 44
  // console.log({ top, frozeTop })
  const [scrollTrans, setScrollTrans] = useState(useSharedValue(0))
  const transYValue = useDerivedValue(() => {
    return interpolate(
      scrollTrans.value,
      [0, frozeTop],
      [-frozeTop, 0],
      Extrapolate.CLAMP,
    )
  })

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('mine')
      // setStyleStatusBar('light-content')
      StatusBar.setBarStyle('light-content', true)
    })

    return unsubscribe
  }, [navigation])

  // useEffect(() => {
  //   const focusListener = navigation.addListener('didFocus', () => {
  //     console.log({ styleStatusBar })
  //     setStyleStatusBar('light-content')
  //   })

  //   return () => {
  //     focusListener.remove()
  //   }
  // }, [navigation])

  // useFocusEffect(
  //   React.useCallback(() => {
  //     console.log('xxxx')
  //     setStyleStatusBar('light-content')
  //   }, []),
  // )
  const headerOpacity = useDerivedValue(() => {
    return interpolate(
      scrollTrans.value,
      [0, frozeTop],
      [0, 1],
      Extrapolate.CLAMP,
    )
  })

  const headerTansStyle = useAnimatedStyle(() => {
    return {
      opacity: headerOpacity.value,
      transform: [{ translateY: transYValue.value }],
    }
  })

  const renderStackHeade = () => {
    return (
      <Animated.View
        style={[
          {
            top: 0,
            position: 'absolute',
            backgroundColor: 'white',
          },
          headerTansStyle,
        ]}
      >
        <Row
          style={{
            width: deviceWidth,
            backgroundColor: 'white',
            height: frozeTop,
          }}
        >
          <MyText>asdfsd</MyText>
        </Row>
      </Animated.View>
    )
  }
  const [routes] = React.useState([
    { key: 'Favorite', title: '收藏' },
    { key: 'Liked', title: '赞过' },
    { key: 'Liked1', title: '关中' },
  ])

  const renderHeader = () => <MineHeader />

  const makeScrollTrans = (scrollTrans: Animated.SharedValue<number>) => {
    setScrollTrans(scrollTrans)
  }

  const renderScene = ({ route }) => {
    if (route.key === 'Favorite') {
      return <Favorite indexNo={0} />
    } else if (route.key === 'Liked') {
      return <Liked index={1} />
    } else if (route.key === 'Liked1') {
      return <Favorite indexNo={2} />
    }
    return null
  }
  console.log({ styleStatusBar })
  return (
    <Column style={{ flex: 1 }}>
      <StatusBar
        // StatusBarAnimation="fade"
        translucent={true}
        // backgroundColor="#ce3d3a"
        // barStyle={styleStatusBar}
      />

      <HeadTabView
        makeScrollTrans={makeScrollTrans}
        frozeTop={frozeTop}
        routes={routes}
        renderScrollHeader={renderHeader}
        renderScene={renderScene}
        tabbarProps={{
          alignSelf: true,
          style: { borderTopLeftRadius: 15, borderTopRightRadius: 15 },
        }}
      />
      {renderStackHeade()}
    </Column>
  )
}

export { UserHome }

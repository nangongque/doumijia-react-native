import React, { useState, useEffect } from 'react'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated'
import { Column, HeadTabView, MyStatusBar, MyText, Row } from '@ui'
import { MineHeader, Favorite, Liked } from './components'
import { useSafeArea } from '@hooks'
import { deviceWidth } from '@util'

const UserHome = ({ navigation }) => {
  const { top } = useSafeArea()
  const frozeTop = top + 44
  const [scrollTrans, setScrollTrans] = useState(useSharedValue(0))
  const transYValue = useDerivedValue(() => {
    return interpolate(
      scrollTrans.value,
      [0, frozeTop],
      [-frozeTop, 0],
      Extrapolate.CLAMP,
    )
  })

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
  return (
    <Column style={{ flex: 1 }}>
      <MyStatusBar isDarkStyle={false} />

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

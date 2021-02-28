import React from 'react'
import { ViewStyle } from 'react-native'
import { Column, MyText, StyleSheet } from '@ui'
import { px2Dp, getFontSize } from '@util'

type Props = BadgeProps & {
  style: ViewStyle
  labelStyle?: ViewStyle
}

const Badge: React.FC<Props> = ({ number, style, labelStyle }) => {
  const showNumber = number > 99 ? '...' : `${number}`
  return (
    <Column align="center" justify="center" style={[styles.container, style]}>
      <MyText style={[styles.text, labelStyle]}>{showNumber}</MyText>
    </Column>
  )
}

export default Badge

const styles = StyleSheet.create({
  container: {
    width: px2Dp(40),
    height: px2Dp(40),
    borderColor: '#fff',
    borderWidth: px2Dp(4),
    borderRadius: px2Dp(20),
    backgroundColor: '#d33a31',
  },
  text: {
    color: '#fff',
    fontSize: getFontSize(10),
  },
})

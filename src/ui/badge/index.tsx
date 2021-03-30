import React from 'react'
import { ViewStyle } from 'react-native'
import { Column, MyText, StyleSheet } from '@ui'
import { adaptiveFont, adaptiveWidth } from '@util'

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
    width: adaptiveWidth(40),
    height: adaptiveWidth(40),
    borderColor: '#fff',
    borderWidth: adaptiveWidth(4),
    borderRadius: adaptiveWidth(20),
  },
  text: {
    color: '#fff',
    fontSize: adaptiveFont(10),
  },
})

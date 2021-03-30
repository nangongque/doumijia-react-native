import React from 'react'
import { Row, MyText } from '@ui'
import { HeaderButtons } from './headerButtons'
import { useDimensions, useNavigation, useSafeArea } from '@hooks'

const HEADER_HEIGHT = 44

export interface StackHeaderProps {
  title?: string
  renderRight?: () => React.ReactNode
  renderLeft?: () => React.ReactNode
  children?: React.ReactNode
  style?: object
  containerStyle?: object
  tintColor?: string
  onBackPress?: () => void
}

const CustomStackHeader = ({
  title,
  renderLeft,
  renderRight,
  children,
  style,
  containerStyle,
  tintColor = '#222',
  onBackPress,
}) => {
  const { top } = useSafeArea()
  const { width } = useDimensions()
  const navigation = useNavigation()
  // const isInStack =
  //   navigation.dangerouslyGetParent()?.state.routeName === 'Main'
  return (
    <Row
      style={[{ marginTop: top, height: HEADER_HEIGHT, width }, containerStyle]}
    >
      {/* <HeaderButtons.Back tintColor={tintColor} onPress={onBackPress} /> */}
      {renderLeft && renderLeft()}
      <Row
        justify="center"
        style={{ flex: 1, marginRight: renderRight ? 0 : 40, ...style }}
      >
        {title ? (
          <MyText size={16} color={tintColor}>
            {title}
          </MyText>
        ) : null}
        {children}
      </Row>
      {renderRight && renderRight()}
    </Row>
  )
}

export { CustomStackHeader }

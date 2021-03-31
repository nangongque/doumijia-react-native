import React, { useMemo } from 'react'
import icons from './icons'
import { Row, Text, TouchableWithoutFeedback } from '@ui'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableWithoutFeedback as GHTouchableWithoutFeedback } from 'react-native-gesture-handler'
const hitSlop = { top: 5, left: 5, bottom: 5, right: 5 }

const MyIcon: React.FC<IconProps> = ({
  onPress,
  disabled = false,
  name,
  size = 12,
  color = 'black',
  text,
  isTextLeft = false,
  textSpace = 4,
  style,
  textStyle,
  gh = true,
}) => {
  const wrapper = useMemo(() => {
    const hasText =
      typeof text === 'number' || (typeof text === 'string' && text !== '')

    const IconComponent: any = icons[name] || AntDesign
    return (
      <Row style={[{ backgroundColor: 'transparent' }, style]}>
        {hasText && isTextLeft && (
          <Text
            style={{
              color,
              fontSize: size,
              marginRight: textSpace,
              ...textStyle,
            }}
          >
            {text}
          </Text>
        )}
        <IconComponent name={name} size={size} color={color} />
        {hasText && !isTextLeft && (
          <Text
            style={{
              color,
              fontSize: size,
              marginLeft: textSpace,
              ...textStyle,
            }}
          >
            {text}
          </Text>
        )}
      </Row>
    )
  }, [name, color, size, style, text, isTextLeft, textStyle, textSpace])

  const Touchable = gh ? GHTouchableWithoutFeedback : TouchableWithoutFeedback

  if (onPress) {
    return (
      <Touchable onPress={onPress} hitSlop={hitSlop} disabled={disabled}>
        {wrapper}
      </Touchable>
    )
  }
  return wrapper
}

export default MyIcon

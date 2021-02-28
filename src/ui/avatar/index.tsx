import React from 'react'
import { ViewStyle } from 'react-native'
import { Column, Image, GHNativeFeedback } from '@ui'

const defaultAvatar = require('@source/images/ic_default_avatar.jpg')

type Props = AvatarProps & {
  style?: ViewStyle
  otherStyle?: ViewStyle
}

const Avatar: React.FC<Props> = ({
  size = 30,
  avatar = defaultAvatar,
  disabled = false,
  userId,
  style,
  otherStyle,
}) => {
  const onPress = () => {
    if (!disabled && !userId) return
    // !disabled && NavigationService.push('UserHome', { id: userId })
  }

  const imageStyle = { borderRadius: size / 2 }
  const inner =
    avatar === defaultAvatar || avatar === '' ? (
      <Image
        source={avatar}
        style={[imageStyle, { width: size, height: size }]}
      />
    ) : null
  // <MyImage
  //   uri={avatar}
  //   width={size}
  //   height={size}
  //   style={[imageStyle, { ...otherStyle }]}
  // />
  return (
    <Column style={style}>
      <GHNativeFeedback onPress={onPress} disabled={disabled}>
        {inner}
      </GHNativeFeedback>
    </Column>
  )
}

export default Avatar

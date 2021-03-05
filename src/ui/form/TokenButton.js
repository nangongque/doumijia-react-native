import React, { useState } from 'react'
import { useInterval } from '@hooks'
import { GHWithoutFeedback } from '@ui'
import { Row } from 'ui/flex'
import MyText from 'ui/myText'
import { ThemeColors } from 'ui/theme'
const TIME = 61

const TokenButton = (props) => {
  const [count, setCount] = useState(TIME)
  const [start, setStart] = useState(false)

  useInterval(
    () => {
      if (count === 0) {
        setCount(TIME)
        setStart(false)
      } else {
        setCount(count - 1)
      }
    },
    start ? 1000 : null,
  )

  const isCounting = count < TIME

  const onPress = () => {
    props.onPress && props.onPress(setStart)
  }

  return (
    <GHWithoutFeedback onPress={onPress}>
      <Row>
        {isCounting ? (
          <MyText>重新发送（{count}s）</MyText>
        ) : (
          <MyText color={ThemeColors.Default}>获取验证码</MyText>
        )}
      </Row>
    </GHWithoutFeedback>
  )
}

export default TokenButton

import React, { useState } from 'react'
import { useInterval } from '@hooks'
import { GHWithoutFeedback } from '@ui'
import { Row } from 'ui/flex'
import MyText from 'ui/myText'
import { ThemeColors } from 'ui/theme'
import { useLocale } from '@contexts/locale'
const TIME = 61

const TokenButton = (props) => {
  const { t } = useLocale()
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
          <MyText size={14}>
            {t('LANG13')}（{count}s）
          </MyText>
        ) : (
          <MyText size={14} color={ThemeColors.Default}>
            {t('LANG12')}
          </MyText>
        )}
      </Row>
    </GHWithoutFeedback>
  )
}

export default TokenButton

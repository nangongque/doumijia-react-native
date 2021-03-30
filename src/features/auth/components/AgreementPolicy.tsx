import React from 'react'
import { ThemeColors } from 'ui/theme'
import { useNavigation } from '@hooks'
import { GHWithoutFeedback, MyText, Row } from '@ui'

const AgreementPolicy = (props) => {
  const navigation = useNavigation()
  const { style, textSize, textColor } = props

  return (
    <Row style={style}>
      <MyText size={textSize} color={textColor}>
        登录注册代表同意
      </MyText>

      <GHWithoutFeedback onPress={() => navigation.navigate('AppWebView')}>
        <MyText size={textSize} color={ThemeColors.Default}>
          《用户协议》
        </MyText>
      </GHWithoutFeedback>

      <GHWithoutFeedback onPress={() => navigation.navigate('AppWebView')}>
        <MyText size={textSize} color={ThemeColors.Default}>
          《隐私政策》
        </MyText>
      </GHWithoutFeedback>
    </Row>
  )
}

export default AgreementPolicy

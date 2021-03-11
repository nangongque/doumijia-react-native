import { GHWithoutFeedback, MyText, Row } from '@ui'
import React from 'react'
import { ThemeColors } from 'ui/theme'
import { useNavigation } from '@hooks'

const AgreementPolicy = (props) => {
  const { style, textSize, textColor } = props
  const navigation = useNavigation()
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

import React from 'react'
import { adaptiveFont, adaptiveWidth, deviceWidth } from '@util'
import { ThemeColors } from 'ui/theme'
import * as iconPath from '../../../source/svg'
import { useNavigation } from '@hooks'
import AgreementPolicy from '@features/auth/components/AgreementPolicy'
import { Column, Row, MyText, GHNativeFeedback, SvgIcon } from '@ui'
import { guideStyles } from '../css'
import { useLocale } from '@contexts/locale'

const third = [
  { name: 'qq', path: iconPath.qq },
  { name: 'weibo', path: iconPath.weibo },
  { name: 'apple', path: iconPath.apple },
]

interface GuideOptionsProps {}
const GuideOptions: React.FC<GuideOptionsProps> = React.memo(({}) => {
  const { t } = useLocale()
  const navigation = useNavigation()

  return (
    <Column style={guideStyles.guideOptions} align="center">
      <GHNativeFeedback onPress={() => console.log('暂未开饭')}>
        <Row style={guideStyles.guideOptionsBtn} justify="center">
          <SvgIcon
            fill={['#00BA2A']}
            path={iconPath.weChat}
            size={adaptiveWidth(40)}
          />
          <MyText
            style={{ marginLeft: 10 }}
            size={adaptiveFont(14)}
            weight="medium"
          >
            {t('LANG0')}
          </MyText>
        </Row>
      </GHNativeFeedback>
      <GHNativeFeedback onPress={() => navigation.navigate('SignIn')}>
        <Row
          style={[
            guideStyles.guideOptionsBtn,
            { backgroundColor: '#D3D3D3', marginTop: 15 },
          ]}
          justify="center"
        >
          <SvgIcon
            fill={['#fff']}
            path={iconPath.phone}
            size={adaptiveWidth(40)}
          />
          <MyText
            style={{ marginLeft: 8 }}
            size={adaptiveFont(14)}
            weight="medium"
            color={ThemeColors.White}
          >
            {t('LANG1')}
          </MyText>
        </Row>
      </GHNativeFeedback>
      <Row
        style={{ width: adaptiveWidth(500), marginVertical: adaptiveWidth(90) }}
        justify="space-evenly"
      >
        {third.map((item, index) => (
          <Column
            key={index}
            align="center"
            justify="center"
            style={[
              guideStyles.guideOptionsThird,
              {
                backgroundColor:
                  index === 2 ? ThemeColors.Black : 'rgba(0,0,0,0.6)',
              },
            ]}
          >
            <SvgIcon
              fill={['#fff']}
              path={item.path}
              size={adaptiveWidth(40)}
            />
          </Column>
        ))}
      </Row>
      <AgreementPolicy
        textSize={adaptiveFont(12)}
        textColor={ThemeColors.White}
        // style={{ width: deviceWidth - 50 }}
      />
    </Column>
  )
})

export { GuideOptions }

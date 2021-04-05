import React from 'react'
import {
  Avatar,
  Column,
  MyText,
  Row,
  Image,
  SvgIcon,
  Divider,
  TouchableOpacity,
  TouchableWithoutFeedback,
  CustomStackHeader,
} from '@ui'
import { adaptiveWidth, vw } from '@util'
import { ThemeColors } from 'ui/theme'
import * as iconPath from '../../../source/svg'
import { BlurView } from '@react-native-community/blur'
import { useSelector, useNavigation, useDimensions } from '@hooks'
import { useLocale } from '@contexts/locale'

interface MineHeaderProps {}
const MineHeader: React.FC<MineHeaderProps> = React.memo(({}) => {
  const { t } = useLocale()
  const ACTIONS = [t('LANG26'), t('LANG27'), t('LANG28')]
  const { width } = useDimensions()
  const navigation = useNavigation()
  const userInfo = useSelector((state) => state.UserReducer.userInfo)

  const { username, doumiNo, signature } = userInfo
  return (
    <Column
      style={{
        flex: 1,
        alignItems: 'flex-start',
        paddingHorizontal: adaptiveWidth(40),
      }}
    >
      <Image
        source={require('@source/images/bbb.jpg')}
        style={{
          width,
          height: (width * 813) / 1080,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      />
      <BlurView
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width,
          height: (width * 813) / 1080,
        }}
        blurType="light"
        blurAmount={5}
        reducedTransparencyFallbackColor="white"
      />
      <CustomStackHeader
        showBack={false}
        containerStyle={{ marginLeft: -adaptiveWidth(40) }}
        renderLeft={() => {
          return (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <SvgIcon
                fill={[ThemeColors.White]}
                path={iconPath.category}
                size={20}
              />
            </TouchableOpacity>
          )
        }}
        renderRight={() => {
          return (
            <Row>
              <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                <SvgIcon
                  fill={[ThemeColors.White]}
                  path={iconPath.setting}
                  size={20}
                  style={{ marginRight: adaptiveWidth(30) }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <SvgIcon
                  fill={[ThemeColors.White]}
                  path={iconPath.share}
                  size={20}
                />
              </TouchableOpacity>
            </Row>
          )
        }}
      />
      {/* <GHWithoutFeedback> */}
      <Column
        style={{
          position: 'absolute',
          right: adaptiveWidth(40),
          top: 110,
          width: adaptiveWidth(50),
          backgroundColor: ThemeColors.LightGrey,
          paddingVertical: 5,
        }}
      >
        <MyText color={ThemeColors.White} size={15} weight="medium">
          {t('LANG25')}
        </MyText>
      </Column>
      {/* <MyText>签到</MyText> */}
      {/* </GHWithoutFeedback> */}
      <Row style={{ marginTop: 15 }}>
        <Avatar
          size={adaptiveWidth(120)}
          avatar={{ uri: `data:image/png;base64,${userInfo.headImg}` }}
        />
        <Column style={{ marginLeft: adaptiveWidth(20) }}>
          <Row>
            <MyText color={ThemeColors.White} size={20} weight="semibold">
              {username}
            </MyText>
          </Row>
          <MyText size={11} color={ThemeColors.WhiteSmoke}>
            {t('LANG23')}：{doumiNo}
          </MyText>
          <Divider height={20} />
        </Column>
      </Row>
      <MyText
        size={14}
        color={ThemeColors.White}
        style={{ marginVertical: 20 }}
      >
        {signature}
      </MyText>
      <Row justify="space-between" style={{ width: width - adaptiveWidth(80) }}>
        <Row
          style={{ marginBottom: 12, width: vw(35) }}
          justify="space-between"
        >
          {ACTIONS.map((item, index) => (
            <Column key={index}>
              <MyText size={15} color={ThemeColors.White} weight="semibold">
                5
              </MyText>
              <MyText size={11} color={ThemeColors.WhiteSmoke}>
                {item}
              </MyText>
            </Column>
          ))}
        </Row>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('EditInfo')}
        >
          <MyText
            color={ThemeColors.White}
            weight="medium"
            style={{
              borderWidth: 1,
              borderColor: ThemeColors.White,
              paddingHorizontal: adaptiveWidth(16),
              paddingVertical: adaptiveWidth(6),
              borderRadius: adaptiveWidth(24),
            }}
          >
            {t('LANG29')}
          </MyText>
        </TouchableWithoutFeedback>
      </Row>
    </Column>
  )
})

export { MineHeader }

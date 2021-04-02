/**
 * 修改昵称
 * changed by lijianpo on 2021/04/01
 */
import React, { useState, useCallback } from 'react'
import { useSelector } from '@hooks'
import { useLocale } from '@contexts/locale'
import { Column, MyStatusBar, MyText, ShadowBox, TextInput } from '@ui'
import { EditStackHeader } from '@features/common/components'
import { adaptiveHeight, adaptiveWidth, deviceWidth } from '@util'
import { changeUserInfo } from '@actions/user_action'

const EditName = ({ navigation }) => {
  const { t } = useLocale()
  const userInfo = useSelector((state) => state.UserReducer.userInfo)
  console.log({ userInfo })
  const userName = userInfo.username
  const [value, onChangeText] = useState(userName)

  const onPress = useCallback(() => {
    Object.assign(userInfo, { username: value })
    changeUserInfo(userInfo, navigation.goBack())
  }, [userInfo, value, navigation])

  return (
    <Column style={{ flex: 1 }}>
      <MyStatusBar isDarkStyle={true} />
      <EditStackHeader title={t('LANG44')} onPress={onPress} />

      <ShadowBox>
        <TextInput
          style={{ height: 44 }}
          value={value}
          defaultValue={userName}
          onChangeText={(text) => onChangeText(text)}
          clearButtonMode="always"
          maxLength={24}
          placeholder={t('LANG47')}
        />
        <MyText
          size={10}
          style={{ position: 'absolute', bottom: 0, right: 10 }}
        >
          {`${value.length}/24`}
        </MyText>
      </ShadowBox>
      <MyText
        style={{
          textAlign: 'left',
          marginLeft: adaptiveWidth(60),
          marginTop: adaptiveHeight(20),
        }}
      >
        {t('LANG48')}
      </MyText>
    </Column>
  )
}

export { EditName }

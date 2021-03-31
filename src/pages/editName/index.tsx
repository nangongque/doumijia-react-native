import React, { useMemo, useCallback } from 'react'
import {
  Avatar,
  Column,
  MyStatusBar,
  MyText,
  NavItem,
  Icon,
  GHWithoutFeedback,
} from '@ui'
import { CustomStackHeader } from 'ui/header/customStackHeader'
import { adaptiveWidth } from '@util'
import { editInfoStyle } from './css'
import { ThemeColors } from 'ui/theme'
import { useSelector } from '@hooks'

const EditName = ({ navigation }) => {
  const userInfo = useSelector((state) => state.UserReducer.userInfo)

  return (
    <Column style={{ flex: 1, backgroundColor: 'white' }}>
      <MyStatusBar isDarkStyle={true} />
      <CustomStackHeader
        showBack={false}
        title="修改名字"
        renderLeft={() => {
          return (
            <GHWithoutFeedback onPress={() => navigation.goBack()}>
              <MyText size={16} color="grey" style={{ paddingLeft: 15 }}>
                取消
              </MyText>
            </GHWithoutFeedback>
          )
        }}
      />
    </Column>
  )
}

export { EditName }

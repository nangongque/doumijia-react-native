/**
 * 账号与安全
 * created by lijianpo on 2020/04/02
 */
import { useLocale } from '@contexts/locale'
import { Column, CustomStackHeader, Divider, MyStatusBar, NavItem } from '@ui'
import React from 'react'
import { ThemeColors } from 'ui/theme'

const AccountSecurity = ({ navigation }) => {
  const { t } = useLocale()
  return (
    <Column style={{ flex: 1, backgroundColor: ThemeColors.White }}>
      <MyStatusBar isDarkStyle={true} />
      <CustomStackHeader title={t('LANG67')} />
      <Divider color={ThemeColors.WhiteSmoke} height={10} />
      <NavItem itemTitle={'手机号'} showItemSeparator={true} />
    </Column>
  )
}

export { AccountSecurity }

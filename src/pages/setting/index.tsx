/**
 * 设置
 * created by lijianpo on 2020/04/02
 */
import { useLocale } from '@contexts/locale'
import { Column, CustomStackHeader, Divider, MyStatusBar, NavItem } from '@ui'
import React from 'react'
import { ThemeColors } from 'ui/theme'

const Setting = ({ navigation }) => {
  const { t } = useLocale()
  return (
    <Column style={{ flex: 1, backgroundColor: ThemeColors.White }}>
      <MyStatusBar isDarkStyle={true} />
      <CustomStackHeader title={t('LANG54')} />
      <Divider color={ThemeColors.WhiteSmoke} height={20} />
      <NavItem
        itemTitle={t('LANG67')}
        showItemSeparator={true}
        onPress={() => navigation.navigate('AccountSecurity')}
      />
    </Column>
  )
}

export { Setting }

/**
 * 带编辑导航头部
 * created by lijianpo on 2021/04/01
 */
import { useLocale } from '@contexts/locale'
import { GHWithoutFeedback, CustomStackHeader } from '@ui'
import React, { useCallback } from 'react'
import { useNavigation } from '@hooks'
import MyText from 'ui/myText'
import { adaptiveWidth } from '@util'
import { ThemeColors } from 'ui/theme'

const EditStackHeader: React.FC<EditStackHeader> = ({
  onPress,
  changeBgColor = false,
  changeTextColor = false,
  ...restProps
}) => {
  const { t } = useLocale()
  const navigation = useNavigation()
  const renderLeft = useCallback(() => {
    return (
      <GHWithoutFeedback
        onPress={() => navigation.goBack()}
        style={{ width: adaptiveWidth(100) }}
      >
        <MyText size={16} color="grey">
          {t('LANG45')}
        </MyText>
      </GHWithoutFeedback>
    )
  }, [t, navigation])

  const renderRight = useCallback(() => {
    return (
      <GHWithoutFeedback
        onPress={onPress}
        style={{
          width: adaptiveWidth(100),
          backgroundColor: changeBgColor
            ? ThemeColors.Default
            : ThemeColors.Gainsboro,
          height: 28,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 14,
        }}
      >
        <MyText
          color={changeTextColor ? ThemeColors.White : ThemeColors.DarkGray}
        >
          {t('LANG46')}
        </MyText>
      </GHWithoutFeedback>
    )
  }, [t, onPress, changeBgColor, changeTextColor])

  return (
    <CustomStackHeader
      {...restProps}
      showBack={false}
      renderLeft={renderLeft}
      leftWidth={adaptiveWidth(100)}
      renderRight={renderRight}
      rightWidth={adaptiveWidth(100)}
    />
  )
}

export { EditStackHeader }

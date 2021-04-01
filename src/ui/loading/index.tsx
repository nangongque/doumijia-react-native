import React from 'react'
import { Column, MyText } from '@ui'
import { ThemeColors } from 'ui/theme'
import { useLocale } from '@contexts/locale'
import WaveLoading from '@components/WaveLoading'

const Loading: React.FC<LoadingProps> = ({ text = 'LANG19', style }) => {
  const { t } = useLocale()
  return (
    <Column align="center" style={style}>
      <WaveLoading
        baseHeight={[4, 16, 2, 10]}
        targeHeight={[10, 4, 16, 2]}
        lineColor={ThemeColors.Default}
        lineStyle={{ marginRight: 2, width: 1 }}
      />
      <MyText size={13} color={'#888'} style={{ marginTop: 8 }}>
        {t(text)}
      </MyText>
    </Column>
  )
}

export default Loading

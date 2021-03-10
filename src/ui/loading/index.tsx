import React from 'react'
import { ViewStyle } from 'react-native'
import { Column, MyText } from '@ui'
import { ThemeColors } from 'ui/theme'
import WaveLoading from '@components/WaveLoading'

type Props = LoadingProps & {
  style?: ViewStyle
}

const Loading: React.FC<Props> = ({ text = '正在加载', style }) => {
  return (
    <Column align="center" style={style}>
      <WaveLoading
        baseHeight={[4, 16, 2, 10]}
        targeHeight={[10, 4, 16, 2]}
        lineColor={ThemeColors.Default}
        lineStyle={{ marginRight: 2, width: 1 }}
      />
      <MyText size={13} color={'#888'} style={{ marginTop: 8 }}>
        {text}
      </MyText>
    </Column>
  )
}

export default Loading

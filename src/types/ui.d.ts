import { ViewStyle } from 'react-native'

declare interface FlexProps {
  // 布局方向
  direction?: 'column' | 'row'
  //
  align?:
    | 'center'
    | 'stretch'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-between'
  //
  justify?:
    | 'center'
    | 'stretch'
    | 'flex-end'
    | 'flex-start'
    | 'space-evenly'
    | 'space-around'
    | 'space-between'
  //
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  children?: React.ReactNode
  linear?: any
  elevation?: boolean
  style?: ViewStyle
}

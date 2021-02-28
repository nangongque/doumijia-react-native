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
}

declare type FontFamily = 'normal' | 'beba'
// declare type FontColor = keyof typeof textColors
declare type Weight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold'

declare interface MyTextProps {
  /** font family, normal | beba, default normal */
  family?: FontFamily
  /** 文字颜色，默认 black */
  color?: string
  /** 字号， 并为字体设置行高, 默认 12 */
  size?: number
  /** 字重  default normal */
  weight?: Weight
  /** 自定义行高，用来覆盖字号映射的行高 */
  height?: number
  textAlign?: 'center'
  children: string | React.ReactNode
}

declare interface AvatarProps {
  size?: number
  avatar?: string
  disabled?: boolean
  userId?: number
}

declare interface DividerProps {
  /**
   * divider height, default hairlineWidth
   */
  height?: number
  /**
   * divider color, default transparent
   */
  color?: string
}

declare interface BadgeProps {
  number: number
}
